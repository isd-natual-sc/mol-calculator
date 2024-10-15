"use client";
import { createContext, useState } from "react";
import { Material } from "@/utils/types";
import MaterialList from "../common/MaterialList";
import { mc } from "@/utils/mol";
import CalcClient from "./calc/CalcClient";
import FormulaForm from "./FormulaForm";
import TransitionList from "./TransitionList";

export const TypeContext = createContext("root");

export default function ClientRoot() {
  const [type, setType] = useState("root");
  const [materials, setMaterials] = useState<Material[]>([]);

  const typeSetter = (value: string) => setType(value);

  return (
    <div>
      <TransitionList setType={typeSetter} />

      {type === "root" ? (
        <></>
      ) : (
        <>
          <FormulaForm materials={materials} setMaterials={setMaterials} />

          <ul className='flex justify-center items-center p-3'>
            <MaterialList materials={materials} />
          </ul>

          <h2 className='w-full text-2xl text-center'>
            式量：{mc.molecular(materials)}
          </h2>
        </>
      )}

      <TypeContext.Provider value={type}>
        <CalcClient materials={materials} />
      </TypeContext.Provider>
    </div>
  );
}
