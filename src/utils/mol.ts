import { atoms } from "./atoms";
import { HashMap, Material } from "./types";

// import atomics from "./atomics.json";
class MolCalc {
  defaultVolume: number;
  avogadro: number;
  atomics: HashMap<number>;

  constructor() {
    // 原子量(atomic weight)をオブジェクトで保管
    this.atomics = atoms;
    // 標準状態でのモル体積
    this.defaultVolume = 22.4;
    // アボガドロ定数
    this.avogadro = 6.0 * 10 ** 23;
  }

  // 式量を求めるメソッド。
  molecular(materials: Material[]): number {
    let amount = 0;
    // 物質のデータを取り出す
    materials.forEach((material) => {
      const { atomName, valence } = material;
      const atom: number = this.atomics[atomName];
      amount += atom * valence;
    });
    return amount;
  }

  // 質量によって物質量を求めるメソッド
  molByMass(materials: Material[], mass: number): number {
    // 式量を演算。
    const molMass = this.molecular(materials);
    const mol = mass / molMass;
    return mol;
  }

  massByMol(materials: Material[], mol: number): number {
    const molMass = this.molecular(materials);
    const mass = molMass * mol;
    return mass;
  }

  molByPiece(piece: number): number {
    // 個数 = mol * アボガドロ定数
    return piece / this.avogadro;
  }

  pieceByMol(mol: number): number {
    return mol * this.avogadro;
  }

  molByVolumeWithDefault(volume: number): number {
    // 標準状態での物質量 = 体積 / 22.4
    return volume / this.defaultVolume;
  }

  volumeByMolWithDefault(mol: number): number {
    return mol * this.defaultVolume;
  }

  // molを経由する演算。
  massByPiece(materials: Material[], piece: number): number {
    const mol = this.molByPiece(piece);
    const mass = this.massByMol(materials, mol);
    return mass;
  }

  massByVolumeWithDefault(materials: Material[], volume: number): number {
    const mol = this.molByVolumeWithDefault(volume);
    const mass = this.massByMol(materials, mol);
    return mass;
  }

  pieceByMass(materials: Material[], mass: number): number {
    const mol = this.molByMass(materials, mass);
    const piece = this.pieceByMol(mol);
    return piece;
  }

  pieceByVolumeWithDefault(volume: number): number {
    const mol = this.molByVolumeWithDefault(volume);
    const piece = this.pieceByMol(mol);
    return piece;
  }

  volumeByMassWithDefault(materials: Material[], mass: number): number {
    const mol = this.molByMass(materials, mass);
    const vol = this.volumeByMolWithDefault(mol);
    return vol;
  }

  volumeByPieceWithDefault(piece: number): number {
    const mol = this.molByPiece(piece);
    const vol = this.volumeByMolWithDefault(mol);
    return vol;
  }
}

export const mc = new MolCalc();
