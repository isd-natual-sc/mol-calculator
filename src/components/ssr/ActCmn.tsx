"use client";

import { Material, Props } from "@/utils/types";
import { formulaReducer } from "@/actions/formula";
import { useFormState } from "react-dom";
import CInput from "../csr/input/CInput";
import CalcBody from "./calc/CalcBody";
import { ReactNode } from "react";
import AtomPullDown from "../csr/input/AtomPullDown";
import AtomInput from "../csr/input/AtomInput";

interface ActProps extends Props {
  children: ReactNode;
}
export default function ActCmn({ children, type }: ActProps) {
  const [materials, formAction] = useFormState<
    Material[] | undefined | "not-exist"
  >(formulaReducer, []);

  return (
    <div>
      <form
        className='flex flex-col justify-center items-center mt-3 p-2'
        action={formAction}>
        <div className='p-2 m-2 flex justify-center items-start'>
          <div className='flex flex-col justify-center items-center'>
            <label htmlFor='atom' className='text-xl font-medium'>
              物質名を元素記号で入力
            </label>
            <AtomInput state={materials!} />
          </div>
          <div className='flex flex-col justify-center items-center mx-2'>
            <label className='text-xl font-medium' htmlFor='valence'>
              個数を入力
            </label>
            <CInput name='valence' state={materials!} />
          </div>
        </div>

        <div className='w-full flex justify-center items-center p-3'>
          <button
            className='text-lg shadow bg-sky-100 rounded-md active:bg-black active:text-white px-5 py-2 m-2 hover:font-semibold'
            type='submit'>
            追加
          </button>

          <button
            className='text-lg shadow bg-red-100 rounded-md active:bg-black active:text-white px-5 py-2 m-2 hover:font-semibold'
            type='submit'
            name='backDelete'
            value='backDelete'>
            最後尾を削除
          </button>
          <button
            className='text-lg shadow bg-red-600 rounded-md active:bg-black text-white px-5 py-2 m-2 hover:font-semibold'
            type='submit'
            value='allDelete'
            name='allDelete'>
            すべて削除
          </button>
        </div>
      </form>

      {materials === "not-exist" ? (
        <div className='m-2 flex justify-center items-center text-red-600 text-lg'>
          その元素記号は存在しません
        </div>
      ) : (
        <>{children}</>
      )}

      <CalcBody type={type} />
    </div>
  );
}
