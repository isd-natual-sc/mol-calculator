"use server";

import { mc } from "@/mol";
import { Material } from "@/types";

export const formulaAct = (fd: FormData) => {
  const material = String(fd.get("material"));
  const sub = String(fd.get("sub"));

  const List: Material[] = [{ atomName: material, valence: parseInt(sub) }];
  mc.molecular(List);

  // fetch("http://localhost:3000/api/calc", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ material }),
  // });
};
