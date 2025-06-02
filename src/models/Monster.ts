export type MonsterPartState = 'normal' | 'wounded' | 'exposed';

export interface MonsterPartStateDetails {
  state: MonsterPartState; // 部位の状態
  slashHitZone: number; // 斬撃肉質
  bluntHitZone: number; // 打撃肉質
  shotHitZone: number; // 射撃肉質
  fireHitZone: number; // 火属性肉質
  waterHitZone: number; // 水属性肉質
  iceHitZone: number; // 氷属性肉質
  thunderHitZone: number; // 雷属性肉質
  dragonHitZone: number; // 龍属性肉質
}

export interface MonsterPart {
  name: string; // 部位名
  states: readonly MonsterPartStateDetails[]; // 部位の状態ごとの詳細
}

export class Monster {
  name: string; // モンスター名
  parts: readonly MonsterPart[]; // 部位情報

  constructor(name: string, parts: readonly MonsterPart[]) {
    this.name = name;
    this.parts = parts;
  }

  // 必要に応じてモンスターの情報を取得するメソッドを追加できます
}
