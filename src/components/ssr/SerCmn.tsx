import { Material, Props } from "@/utils/types";
import MaterialList from "../common/MaterialList";
import { mc } from "@/utils/mol";
import { cookies } from "next/headers";
import { KEY } from "@/utils/global";
import { createFormula } from "@/actions/formula";
import CInput from "../csr/input/CInput";
import AtomInput from "../csr/input/AtomInput";
import CalcBody from "./calc/CalcBody";

export async function getServerSideProps() {}

export default function SerCmn({ type }: Props) {
  let materials: Material[] = [];
  const cookieData = cookies().get(KEY);

  if (cookieData)
    if (cookieData.value !== "") materials = JSON.parse(cookieData.value);

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        action={createFormula}
      >
        <div className="p-2 m-2 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="atom" className="text-xl font-medium">
              物質名を元素記号で入力
            </label>
            <AtomInput state={cookieData?.value ?? ""} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="text-xl font-medium" htmlFor="valence">
              個数を入力
            </label>
            <CInput name="valence" state={cookieData?.value ?? ""} />
          </div>
        </div>
        <div className="w-full flex justify-center items-center p-1">
          <button
            className="text-lg shadow bg-sky-100 rounded-md active:bg-black active:text-white px-5 py-2 m-2 hover:font-semibold"
            type="submit"
          >
            追加
          </button>

          <button
            className="text-lg shadow bg-red-100 rounded-md active:bg-black active:text-white px-5 py-2 m-2 hover:font-semibold"
            value="backDelete"
            name="backDelete"
            type="submit"
          >
            最後尾を削除
          </button>

          <button
            className="text-lg shadow bg-red-600 rounded-md active:bg-black text-white px-5 py-2 m-2 hover:font-semibold"
            value="allDelete"
            name="allDelete"
            type="submit"
          >
            すべて削除
          </button>
        </div>
      </form>

      <ul className="flex justify-center items-center p-3">
        {materials[0] ? (
          <MaterialList materials={materials} />
        ) : (
          <div className="p-2 m-2 text-xl">ここに化学式が表示されます</div>
        )}
      </ul>

      <h2 className="w-full text-2xl text-center">
        原子量・分子量・式量：{mc.molecular(materials)}
      </h2>

      <CalcBody type={type} />
    </div>
  );
}
