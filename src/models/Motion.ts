export const MOTION_ATTACK_TYPES = ['slash', 'blunt', 'shot'] as const;
export type MotionAttackType = typeof MOTION_ATTACK_TYPES[number];

export interface Motion {
  name: string; // モーション名
  motionValue: number; // モーション値
  elementMultiplier: number; // 属性倍率
  sharpnessModifier: number; // 切れ味補正倍率
  hitCount: number; // ヒット数
  attackType: MotionAttackType; // 攻撃タイプ: enum MotionAttackType
  isJump?: boolean; // ジャンプ攻撃かどうか（省略時false）
}

export class MotionData implements Motion {
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
