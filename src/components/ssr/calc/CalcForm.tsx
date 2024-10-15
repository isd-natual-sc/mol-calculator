"use client";
import { calcReducer } from "@/actions/calc";
import { ALLOW_STEP, fmtPow, roundFloat } from "@/utils/global";
import { Props } from "@/utils/types";
import { useFormState } from "react-dom";

interface FormProps extends Props {
  labelText: string;
  units: string;
}

const CalcForm = ({ type, labelText, units }: FormProps) => {
  const [res, action] = useFormState(calcReducer, { status: "" });
  return (
    <div>
      <form
        action={action}
        className='flex flex-col justify-center items-center m-5'>
        <label className='text-lg p-1' htmlFor='input'>
          {labelText}を入力してください
        </label>
        <div className='flex justify-center items-center'>
          {type === "piece" ? (
            <div>
              <input
                type='number'
                name='input'
                id='input'
                step={ALLOW_STEP}
                className='text-xl w-24 px-1 py-2 m-4 border border-blue-900'
              />
              <label htmlFor='sup' className='text-lg p-1'>
                *10
              </label>
              <sup>
                <input
                  type='number'
                  name='sup'
                  id='sup'
                  className='text-base w-20 px-1 py-2 m-4 shadow-md'
                />
              </sup>
            </div>
          ) : (
            <input
              type='number'
              name='input'
              id='input'
              step={ALLOW_STEP}
              className='text-xl w-24 p-1 m-4 border border-black'
            />
          )}
          [{units}]
          <button
            type='submit'
            name='calc'
            value={type}
            className='bg-black text-white hover:bg-white hover:text-black border-2 active:font-bold border-black px-3 py-1 m-2 rounded-sm'>
            計算
          </button>
        </div>
      </form>

      {res ? (
        res.status === "ok" ? (
          <div className='flex justify-center items-center m-4'>
            {
              <ul className='flex flex-col text-xl'>
                {res.mol && <li>物質量: {roundFloat(res.mol)} [mol]</li>}
                {res.mass && <li>質量: {roundFloat(res.mass)} [g]</li>}
                {res.piece && (
                  <li>
                    個数: {roundFloat(fmtPow(res.piece).valid)} * 10
                    <sup>{fmtPow(res.piece).pow}</sup> [個]
                  </li>
                )}
                {res.volume && (
                  <li>標準状態での体積: {roundFloat(res.volume)} [L]</li>
                )}
              </ul>
            }
          </div>
        ) : (
          <div className='text-red-600 text-lg flex justify-center items-center'>
            {res.status}
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default CalcForm;
