"use client";

import { Material, Props } from "@/types";
import MaterialList from "../common/MaterialList";
import { mc } from "@/mol";
import { formulaReducer } from "@/actions/formula";
import { useFormState } from "react-dom";
import AtomInput from "../csr/AtomInput";
import CInput from "../csr/CInput";
import CalcBody from "./CalcBody";

export const dynamic = "force-dynamic";

export default function ActCmn({ type }: Props) {
  const [materials, formAction] = useFormState<Material[] | undefined>(
    formulaReducer,
    []
  );

  return (
    <div>
      <form
        className='flex flex-col justify-center items-center'
        action={formAction}>
        <div className='p-2 m-2 flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <label htmlFor='atom' className='text-xl font-medium'>
              物質名を元素記号で入力
            </label>
            <AtomInput state={materials!} />
            <noscript>自動的に大文字になりません。</noscript>
          </div>
          <label className='text-xl font-medium' htmlFor='valence'>
            個数を入力
          </label>
          <CInput name='valence' state={materials!} />
        </div>
        <div className='w-full flex justify-center items-center p-1'>
          <button
            className='text-lg shadow bg-sky-100 rounded-md active:bg-black active:text-white px-5 py-2 m-2 hover:font-semibold'
            type={"submit"}>
            追加
          </button>

          <button
            className='text-lg shadow bg-red-100 rounded-md active:bg-black active:text-white px-5 py-2 m-2 hover:font-semibold'
            type={"submit"}
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

      <ul className='flex justify-center items-center p-3'>
        <MaterialList materials={materials ?? []} />
      </ul>

      <h2 className='w-full text-2xl text-center'>
        式量：{mc.molecular(materials ?? [])}
      </h2>

      <CalcBody type={type} />
    </div>
  );
}
