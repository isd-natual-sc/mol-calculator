"use client";
import { Material } from "@/types";
import { useEffect, useRef } from "react";

const CInput = ({
  name,
  state,
}: {
  name: string;
  state: string | Material[];
}) => {
  const resetRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    resetRef.current!.value = "";
  }, [state]);
  return (
    <input
      id='valence'
      name={name}
      ref={resetRef}
      type='number'
      className='bg-orange-50 text-xl p-2 m-2 shadow max-w-32'
    />
  );
};

export default CInput;
