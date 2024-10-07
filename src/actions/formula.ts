"use server";

import { KEY } from "@/global";
import { Material } from "@/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createFormula = async (fd: FormData) => {
  const atomName = fd.get("atomName")!.toString();
  const valence = fd.get("valence")!.toString();
  const cookiesList = cookies();

  if (fd.get("allDelete")) {
    cookiesList.delete(KEY);
    revalidatePath("/");
    return "deleted-all";
  }

  if (atomName === "") return false;

  try {
    const prev = cookiesList.get(KEY);
    if (fd.get("backDelete")) {
      const prevList: Material[] = JSON.parse(prev!.value);
      prevList.pop();
      cookiesList.set(KEY, JSON.stringify(prevList));
      return true;
    }

    let newMaterials: Material[] = [
      { atomName, valence: valence === "" ? 1 : Number(valence) },
    ];

    if (prev) newMaterials = [...JSON.parse(prev.value), ...newMaterials];
    cookiesList.set(KEY, JSON.stringify(newMaterials), { secure: true });
  } catch (err) {
    console.log(err);
    return false;
  }

  console.log("action done");

  revalidatePath("/");
  return true;
};

export const formulaReducer = async (prev?: Material[], fd?: FormData) => {
  if (fd) {
    const validate = await createFormula(fd);
    return !validate
      ? prev
      : validate === "deleted-all"
      ? []
      : (JSON.parse(cookies().get(KEY)!.value) as Material[]);
  }
  return prev;
};
