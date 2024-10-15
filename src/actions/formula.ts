"use server";

import { atoms } from "@/utils/atoms";
import { KEY } from "@/utils/global";
import { Material } from "@/utils/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createFormula = async (fd: FormData) => {
  const atomName = fd.get("atomName")?.toString();
  const valence = fd.get("valence")?.toString();
  const cookiesList = cookies();
  const prev = cookiesList.get(KEY);

  if (fd.get("allDelete")) {
    cookiesList.delete(KEY);
    revalidatePath("/");
    console.log("All Delete done");
    return "deleted-all";
  }

  if (fd.get("backDelete")) {
    const prevList: Material[] = JSON.parse(prev!.value);
    prevList.pop();

    cookiesList.delete(KEY);
    cookiesList.set(KEY, JSON.stringify(prevList));

    revalidatePath("/");
    console.log("Back Delete done");
    return true;
  }

  if (
    atomName === "" ||
    !atomName ||
    (valence !== "" && (Number(valence) <= 0 || !valence))
  )
    return false;

  if (!Object.keys(atoms).includes(atomName)) return "not-exist";

  let newMaterials: Material[] = [
    {
      atomName,
      valence: valence === "" ? 1 : Number(valence),
    },
  ];

  if (prev) newMaterials = [...JSON.parse(prev.value), ...newMaterials];
  cookiesList.set(KEY, JSON.stringify(newMaterials), { secure: true });

  console.log("action done");

  revalidatePath("/");
  return true;
};

export const formulaReducer = async (
  prev?: Material[] | "not-exist",
  fd?: FormData
) => {
  if (fd) {
    const validate = await createFormula(fd);
    return !validate
      ? JSON.parse(cookies().get(KEY)!.value)
      : validate === "deleted-all"
      ? []
      : validate === "not-exist"
      ? validate
      : (JSON.parse(cookies().get(KEY)!.value) as Material[]);
  }
  return JSON.parse(cookies().get(KEY)!.value);
};
