"use client";

import { Material } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
import AtomPullDown from "./AtomPullDown";

const AtomInput = ({ state }: { state: string | Material[] }) => {
  const [atomName, setAtomName] = useState("");
  const [error, setError] = useState("");
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
  }, [state]);

  const [isPullDown, setIsPullDown] = useState(true);

  return (
    <>
      <div className='flex justify-center items-center mx-2'>
        <button
          type='button'
          onClick={() => setIsPullDown(!isPullDown)}
          className='text-sm shadow rounded-md active:bg-slate-10 px-2 py-1 m-2'>
          {isPullDown ? "入力形式にする" : "プルダウン形式にする"}
        </button>

        {isPullDown ? (
          <AtomPullDown />
        ) : (
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
            <noscript className='text-red-600'>
              自動的に大文字になりません。
            </noscript>
          </>
        )}
      </div>

      {error || <div className='text-red-600 text-lg'>{error}</div>}
    </>
  );
};

export default AtomInput;
