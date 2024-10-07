"use client";

import { Material } from "@/types";
import { useEffect, useRef, useState } from "react";

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

  return (
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
  );
};

export default AtomInput;
