export const TITLE = "Chemical Calculator";
export const KEY = "mol-calculator";

type PieceValue = {
  valid: number;
  pow: number;
};

export const fmtPow = (value: number): PieceValue => {
  const valid = value / 10 ** 23;
  const validStr = String(valid);
  const validCheck = validStr.split(".")[0];

  // 0.000122とかのとき
  if (validCheck === "0") {
    const notZeroBgn = [...validStr].findIndex((char) => char !== "0");
    const zeroLen = [...validStr].filter(
      (char, i) => char === "0" && i < notZeroBgn
    ).length;
    return {
      valid: valid * 10 ** zeroLen,
      pow: 23 - zeroLen,
    };
  }

  if (validCheck.length === 1) {
    return {
      valid,
      pow: 23,
    };
  }

  return {
    valid: valid / 10 ** (validCheck.length - 1),
    pow: 23 + validCheck.length - 1,
  };
};

const VALID_DIGITS = 3;
export const roundFloat = (value: number) =>
  value % 1 === 0
    ? value
    : Math.round(value * 10 ** VALID_DIGITS) / 10 ** VALID_DIGITS;

export const ALLOW_STEP = 10 ** -32;
