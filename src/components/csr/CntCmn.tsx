"use client";
import { useEffect, useRef, useState } from "react";
import { Material, Props } from "@/types";
import MaterialList from "../common/MaterialList";
import AtomInput from "./AtomInput";
import { mc } from "@/mol";
import CalcClient from "./CalcClient";

export default function ClientCmn({ type }: Props) {
  const [error, setError] = useState("");
  const [materials, setMaterials] = useState<Material[]>([]);
  const [valence, setValence] = useState(1);

  const [atomName, setAtomName] = useState("");

  const focusRef = useRef<HTMLInputElement>(null);

  const formatChemicalFormula = (value: string) => {
    setError("");
    if ([...value].some((char) => !isNaN(parseInt(char)))) {
      setError("値が間違っています。");
      return;
    }

    if (value == "" || value.length < 1) {
      setAtomName("");
    } else if (value.length === 1) {
      setAtomName(`${value[0].toUpperCase()}`);
    } else {
      setAtomName(`${value[0].toUpperCase()}${value[1]}`);
    }
  };

  useEffect(() => {
    setAtomName("");
    focusRef.current?.focus();
  }, [materials]);

  const createFormula = () => {
    setError("");

    setMaterials([
      ...materials,
      { atomName, valence: valence === 0 ? 1 : valence },
    ]);

    setAtomName("");
    setValence(1);
  };

  const removeBack = () => {
    const newMaterials = [...materials];
    newMaterials.pop();
    setMaterials(newMaterials);
  };

  const removeAll = () => {
    setMaterials([]);
  };

  if (window)
    window.addEventListener("keydown", ({ key, ctrlKey }) => {
      switch (key) {
        case "Enter":
          createFormula();
          return;

        case "Backspace":
          if (ctrlKey) removeBack();
          return;

        case "Delete":
          if (ctrlKey) removeAll();
          return;

        default:
          return;
      }
    });

  return (
    <div>
      <form className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <label htmlFor='atom' className='text-xl font-medium'>
            物質名を元素記号で入力
          </label>

          <>
            <input
              className='text-xl bg-slate-100 p-2 m-2 shadow max-w-20 text-center'
              type='text'
              id='atom'
              name='atomName'
              value={atomName}
              onChange={(e) => formatChemicalFormula(e.target.value)}
              ref={focusRef}
            />

            {error || <div className='text-red-600 text-lg'>{error}</div>}
          </>
        </div>

        <div className='p-2 m-2 flex flex-col justify-center items-center'>
          <label className='text-xl font-medium' htmlFor='valence'>
            個数を入力
          </label>
          <input
            className='bg-orange-50 text-xl p-2 m-2 shadow max-w-32'
            type='number'
            name='valence'
            id='valence'
            value={valence}
            onChange={(e) => setValence(Number(e.target.value))}
          />
        </div>
      </form>

      {error === "" || (
        <div className='flex justify-center items-center w-full text-red-600 text-lg p-2'>
          {error}
        </div>
      )}

      <div className='w-full flex justify-center items-center p-1'>
        <button
          className='text-lg shadow bg-sky-100 rounded-md active:bg-black active:text-white px-5 py-2 m2'
          type={"button"}
          onClick={createFormula}>
          追加
        </button>
      </div>
      <div className='w-full flex justify-center items-center p-1'>
        <button
          className='text-lg shadow bg-red-100 rounded-md active:bg-black active:text-white px-5 py-2 m-2'
          onClick={removeBack}>
          最後尾を削除
        </button>
        <button
          className='text-lg shadow bg-red-600 rounded-md active:bg-black text-white px-5 py-2 m-2'
          type={"button"}
          onClick={removeAll}>
          すべて削除
        </button>
      </div>
      <ul className='flex justify-center items-center p-3'>
        <MaterialList materials={materials} />
      </ul>

      <h2 className='w-full text-2xl text-center'>
        式量：{mc.molecular(materials)}
      </h2>

      <CalcClient type={type} materials={materials} />
    </div>
  );
}
