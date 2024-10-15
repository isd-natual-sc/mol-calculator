"use client";
import React from "react";

const TransitionList = ({ setType }: { setType: (value: string) => void }) => {
  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={() => setType("root")}
        className='p-2 m-2 hover:font-medium text-blue-500 hover:underline '>
        使い方
      </button>

      <button
        onClick={() => setType("mass")}
        className='p-2 m-2 hover:font-medium text-blue-500 hover:underline'>
        質量
      </button>
      <button
        onClick={() => setType("piece")}
        className='p-2 m-2 hover:font-medium text-blue-500 hover:underline'>
        個数
      </button>
      <button
        onClick={() => setType("volume")}
        className='p-2 m-2 hover:font-medium text-blue-500 hover:underline'>
        体積
      </button>
      <button
        onClick={() => setType("mol")}
        className='p-2 m-2 hover:font-medium text-blue-500 hover:underline'>
        物質量
      </button>
    </div>
  );
};

export default TransitionList;
