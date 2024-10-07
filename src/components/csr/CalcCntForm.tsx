import { useRef, useState } from "react";
import { CalcClientProps } from "./CalcClient";
import {
  ByMass,
  ByMol,
  ByPiece,
  ByVolume,
  Material,
  WaysOption,
} from "@/types";
import { mc } from "@/mol";

interface ClientFormProps extends CalcClientProps {
  labelText: string;
}
const CalcCntForm = ({ type, materials, labelText }: ClientFormProps) => {
  const calcRef = useRef<HTMLInputElement>(null);
  const powerRef = useRef<HTMLInputElement>(null);

  const [result, setResult] = useState<WaysOption>({ status: "" });

  const calculate = () => {
    const calcInfo = Number(calcRef.current!.value);
    const power = type === "piece" ? powerRef.current?.value : undefined;

    if (calcInfo <= 0) {
      setResult({ status: "負の数は受付できません" });
      return;
    }

    const byMassArgs: [Material[], number] = [materials, Number(calcInfo!)];

    switch (type) {
      case "mass":
        setResult({
          status: "ok",
          mol: mc.molByMass(...byMassArgs),
          piece: mc.pieceByMass(...byMassArgs),
          volume: mc.volumeByMassWithDefault(...byMassArgs),
        } as ByMass);
        return;

      case "piece":
        const arg = calcInfo * 10 ** Number(power);
        setResult({
          status: "ok",
          mol: mc.molByPiece(arg),
          mass: mc.massByPiece(materials, arg),
          volume: mc.volumeByPieceWithDefault(arg),
        } as ByPiece);
        return;

      case "volume":
        setResult({
          status: "ok",
          mol: mc.molByVolumeWithDefault(calcInfo),
          mass: mc.massByVolumeWithDefault(...byMassArgs),
          piece: mc.pieceByVolumeWithDefault(calcInfo),
        } as ByVolume);
        return;

      case "mol":
        setResult({
          status: "ok",
          mass: mc.molByMass(...byMassArgs),
          piece: mc.molByPiece(calcInfo),
          volume: mc.molByVolumeWithDefault(calcInfo),
        } as ByMol);
        return;

      default:
        setResult({
          status: "パスが正しくありません。",
        });
        return;
    }
  };

  return (
    <div>
      <label htmlFor='input'>{labelText}</label>
      {type === "piece" ? (
        <div>
          <input
            type='number'
            id='input'
            className='text-xl w-24 px-1 py-2 m-4 border border-blue-900'
            ref={calcRef}
          />
          <label htmlFor='sup' className='text-lg p-1'>
            *10
          </label>
          <sup>
            <input
              type='number'
              id='sup'
              className='text-base w-20 px-1 py-2 m-4 shadow-md'
              ref={powerRef}
            />
          </sup>
        </div>
      ) : (
        <input
          type='number'
          name='input'
          id='input'
          className='text-xl w-24 p-1 m-4 border border-black'
          ref={calcRef}
        />
      )}

      <button
        onClick={calculate}
        className='bg-black text-white hover:bg-white hover:text-black border-2 active:font-bold border-black px-3 py-1 m-1 rounded-sm'>
        計算
      </button>

      <div>
        {result.status === "ok" ? (
          <div className='flex justify-center items-center m-4'>
            {
              <ul className='flex flex-col'>
                {result.mol && <li>物質量: {result.mol} [mol]</li>}
                {result.mass && <li>質量: {result.mass} [g]</li>}
                {result.piece && <li>個数: {result.piece} [個]</li>}
                {result.volume && (
                  <li>標準状態での体積: {result.volume} [L]</li>
                )}
              </ul>
            }
          </div>
        ) : (
          <div className='text-center text-xl m-2 p-3 font-medium'>
            {result.status}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalcCntForm;
