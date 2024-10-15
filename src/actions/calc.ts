"use server";

import { KEY } from "@/utils/global";
import { mc } from "@/utils/mol";
import {
  ByMass,
  ByMol,
  ByPiece,
  ByVolume,
  Material,
  WaysOption,
} from "@/utils/types";
import { cookies } from "next/headers";

const calc = async (fd: FormData): Promise<WaysOption> => {
  const input = Number(fd.get("input")!.toString());
  const type = fd.get("calc")!.toString();

  if (input < 0) return { status: "負の数は受付できません" };
  if (input === 0 || isNaN(input))
    return { status: "正しい値を入力してください。" };

  const cookieData = cookies().get(KEY);
  if (!cookieData || !cookieData.value || cookieData.value === "")
    return { status: "化学式が見つかりません" };

  const materials: Material[] = JSON.parse(cookieData.value);

  const byMassArgs: [Material[], number] = [materials, input];

  switch (type) {
    case "mass":
      return {
        status: "ok",
        mol: mc.molByMass(...byMassArgs),
        piece: mc.pieceByMass(...byMassArgs),
        volume: mc.volumeByMassWithDefault(...byMassArgs),
      } as ByMass;

    case "piece":
      const power = Number(fd.get("sup")!.toString());
      const arg = input * 10 ** power;
      return {
        status: "ok",
        mol: mc.molByPiece(arg),
        mass: mc.massByPiece(materials, arg),
        volume: mc.volumeByPieceWithDefault(arg),
      } as ByPiece;

    case "volume":
      return {
        status: "ok",
        mol: mc.molByVolumeWithDefault(input),
        mass: mc.massByVolumeWithDefault(...byMassArgs),
        piece: mc.pieceByVolumeWithDefault(input),
      } as ByVolume;

    case "mol":
      return {
        status: "ok",
        mass: mc.massByMol(...byMassArgs),
        piece: mc.pieceByMol(input),
        volume: mc.volumeByMolWithDefault(input),
      } as ByMol;

    default:
      return {
        status: "パスが正しくありません。",
      };
  }
};

export const calcReducer = async (prev?: WaysOption, fd?: FormData) => {
  if (fd) return await calc(fd);
  return prev;
};
