export interface Motion {
  name: string; // モーション名
  motionValue: number; // モーション値
  elementMultiplier: number; // 属性倍率
  sharpnessModifier: number; // 切れ味補正倍率
  hitCount: number; // ヒット数
}

export class MotionData {
  name: string;
  motionValue: number;
  elementMultiplier: number;
  sharpnessModifier: number;
  hitCount: number;

  constructor(params: Motion) {
    this.name = params.name;
    this.motionValue = params.motionValue;
    this.elementMultiplier = params.elementMultiplier;
    this.sharpnessModifier = params.sharpnessModifier;
    this.hitCount = params.hitCount;
  }

  // 必要に応じてモーションの情報を取得するメソッドを追加できます
}
