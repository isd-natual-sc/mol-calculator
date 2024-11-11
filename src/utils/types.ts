interface Props {
  type: string;
}

type Path = { calc: string };

type Material = {
  atomName: string;
  valence: number;
};

type HashMap<T> = {
  [key: string]: T;
};

type ValidationStatus = {
  status: string;
};

type Ways = {
  mol: number;
  mass: number;
  piece: number;
  volume: number;
};

type WaysOption = {
  mol?: number;
  mass?: number;
  piece?: number;
  volume?: number;
} & ValidationStatus;

type ByMol = Pick<Ways, "mass" | "piece" | "volume"> & ValidationStatus;
type ByMass = Pick<Ways, "mol" | "piece" | "volume"> & ValidationStatus;
type ByPiece = Pick<Ways, "mass" | "mol" | "volume"> & ValidationStatus;
type ByVolume = Pick<Ways, "mass" | "mol" | "piece"> & ValidationStatus;

export type {
  Props,
  Path,
  Material,
  HashMap,
  ValidationStatus,
  WaysOption,
  ByMol,
  ByMass,
  ByPiece,
  ByVolume,
};
