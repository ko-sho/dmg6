export type MotionAttackType = 'slash' | 'blunt' | 'shot';

export interface Motion {
  name: string; // モーション名
  motionValue: number; // モーション値
  elementMultiplier: number; // 属性倍率
  sharpnessModifier: number; // 切れ味補正倍率
  hitCount: number; // ヒット数
  attackType: MotionAttackType; // 攻撃タイプ: 'slash' | 'blunt' | 'shot'
  isJump?: boolean; // ジャンプ攻撃かどうか（省略時false）
}

export class MotionData {
  name: string;
  motionValue: number;
  elementMultiplier: number;
  sharpnessModifier: number;
  hitCount: number;
  attackType: MotionAttackType;
  isJump: boolean;

  constructor(params: Motion) {
    this.name = params.name;
    this.motionValue = params.motionValue;
    this.elementMultiplier = params.elementMultiplier;
    this.sharpnessModifier = params.sharpnessModifier;
    this.hitCount = params.hitCount;
    this.attackType = params.attackType;
    this.isJump = params.isJump ?? false;
  }

  // 必要に応じてモーションの情報を取得するメソッドを追加できます
}
