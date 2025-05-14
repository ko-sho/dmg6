export type MonsterPartState = 'normal' | 'wounded' | 'exposed';

export interface MonsterPart {
  name: string; // 部位名
  state: MonsterPartState; // 部位の状態
  physicalHitZone: number; // 物理肉質
  elementalHitZones: {
    fire: number;
    water: number;
    ice: number;
    thunder: number;
    dragon: number;
  }; // 属性ごとの属性肉質
}

export class Monster {
  name: string; // モンスター名
  parts: MonsterPart[]; // 部位情報

  constructor(name: string, parts: MonsterPart[]) {
    this.name = name;
    this.parts = parts;
  }

  // 必要に応じてモンスターの情報を取得するメソッドを追加できます
}
