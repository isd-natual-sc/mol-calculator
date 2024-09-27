"use client";

import { Props } from "@/types";
import { useState } from "react";

const ClientInput = ({ name, placeholder, label, width }: Props) => {
  const [value, setValue] = useState("");

  const formatChemicalFormula = (nextValue: string) => {
    if (nextValue == "" || nextValue.length < 1) {
      setValue("");
    } else if (nextValue.length === 1) {
      setValue(`${nextValue[0].toUpperCase()}`);
    } else {
      setValue(`${nextValue[0].toUpperCase()}${nextValue[1]}`);
    }
  };

  return (
    <div className="p-2 m-2">
      <label className="text-xl font-medium">{label}</label>
      <input
        type="text"
        value={value}
        name={name}
        placeholder={placeholder}
        width={width}
        onChange={(e) => formatChemicalFormula(e.target.value)}
        className="text-xl p-2 m-2 shadow"
      />
    </div>
  );
};

export default ClientInput;
