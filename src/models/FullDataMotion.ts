// full_data_1.0.11.xlsxの武器ごとのモーションデータモデル
// 既存Motionモデルには影響しない新しい型

export interface FullDataMotion {
  name: string; // 日本語名
  enName: string; // 英語名
  RSID: number | string;
  RSName: string;
  colName: string;
  DamageTypeFixed: string;
  DamageTypeCustom: string;
  DamageAngleFixed: string;
  DamageAngleOffsetDeg: number;
  Attack: number;
  FixAttack: number;
  GuardType: string;
  VersusGuardPower: number;
  StageDamageTypeFixed: string;
  StageDamageExIDFixed: string;
  AttackAttrFixed: string;
  AttrLevel: number;
  AttrValue: number;
  AttackCond: string;
  IsForceCond: boolean;
  CondValue: number;
  IsUseCondDefaultSec: boolean;
  CondCustomSec: number;
  StunDamage: number;
  FlagBit: number;
  MultiHitTimer: number;
  HealValue: number;
  PriorityFixed: number;
  PriorityTypeFixed: string;
  DisableContactPointAdjust: boolean;
  IsContactPointAdjustIgnoreDamageAngle: boolean;
  PorterDodgeFixed: string;
  ActionTypeFixed: string;
  PartsBreakRate: number;
  ParryDamage: number;
  RideDamage: number;
  BattleRidingAttackType: string;
  RidingScarDamage: number;
  RidingSuccessDamage: number;
  RidingSuccessDamageRawScar: number;
  IsSkillHien: boolean;
  IsPointAttack: boolean;
  IsPrePointHitReaction: boolean;
  TearScarCreateRate: number;
  TearScarDamageRate: number;
  RawScarDamageRate: number;
  OldScarDamageRate: number;
  IsScarForceChange: boolean;
  IsRawScarForce: boolean;
  IsRawScarLimit: boolean;
  IsWeakPointLimit: boolean;
  NoDamageReaction: boolean;
  IsMultiHitEmParts: boolean;
  MultiHitEmPartsMaxNum: number;
  IsMultiHitEmWeak: boolean;
  MultiHitEmWeakMaxNum: number;
  MultiHitRateCurve: string;
  IsLaserGuardCounter: boolean;
  IsWpPhysicalAttack: boolean;
  IsNoUseKireaji: boolean;
  IsForceUseKireajiAttackRate: boolean;
  IsCustomKireajiReduce: boolean;
  CustomKireajiReduce: number;
  UseStatusAttackPower: boolean;
  UseStatusAttrPower: boolean;
  StatusAttrRate: number;
  StatusConditionRate: number;
  UseSkillAdditionalDamage: boolean;
  UseSkillContinuousAttack: boolean;
  MultiHitStatusRateCurve: string;
  IsNoCritical: boolean;
  IsCustomShockAbsorberRate: boolean;
  CustomShockAbsorberRate: number;
  IsGestureAttack: boolean;
  HitEffectTypeFixed: string;
  DisableHitEffect: boolean;
  HitEffectAngleZ: number;
  HitEffectAngleX: number;
  HitEffectOverwriteConnectID: string;
  GeneralValue1: number;
  GeneralValue2: number;
  GeneralValue3: number;
  FriendDamageTypeFixed: string;
  IsSensor: boolean;
  CameraShakeGuid: string;
  IsEnableMotSeqCameraShake: boolean;
  IgnoreRecoil: boolean;
  HitStopType: string;
  HitStopIgnoreResponse: boolean;
  RSKName: string;
  colShapeName: string;
  GroupIndex: number;
  GName: string;
  GLayerIndex: number;
  GShapeNames: string;
  GJointNames1: string;
  GJointNames2: string;
  GShapeTypes: string;
  GShapeParams: string;
}

export type FullDataMotionList = FullDataMotion[];

export interface FullDataWeaponMotions {
  weaponType: string; // 例: 'greatsword', 'longsword', ...
  motions: FullDataMotionList;
}

export type FullDataMotionsByWeapon = Record<string, FullDataMotionList>;
