// モンスター定義の一括エクスポート
import { default as Arshveldo } from "./Arshveldo";
import { default as GoreMagala } from "./GoreMagala";
import { default as NekoTrainingTarupuncher } from "./NekoTrainingTarupuncher";
import { default as NuEgdra } from "./NuEgdra";
import { default as Redau } from "./Redau";
import { default as UzTuna } from "./UzTuna";
import { default as ZoShia } from "./ZoShia";
import type { Monster } from "../../models/Monster";

export const MONSTER_LIST: Monster[] = [
  NekoTrainingTarupuncher,
  Redau,
  UzTuna,
  NuEgdra,
  Arshveldo,
  GoreMagala,
  ZoShia,
];

export { Arshveldo, GoreMagala, NekoTrainingTarupuncher, NuEgdra, Redau, UzTuna, ZoShia };
