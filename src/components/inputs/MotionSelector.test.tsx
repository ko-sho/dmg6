import { render, screen, fireEvent } from "@testing-library/react";
import MotionSelector from "./MotionSelector";
import { vi } from "vitest";
import type { FullDataMotion } from "../../models/FullDataMotion";
import type { Dispatch, SetStateAction } from "react";

describe("MotionSelector", () => {
  const availableMotions = motions;
  it("モーションリストが表示される", () => {
    render(
      <MotionSelector
        availableMotions={availableMotions}
        selectedMotions={[]}
        setSelectedMotions={() => {}}
      />
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });
  it("選択時にsetSelectedMotionsが呼ばれる", () => {
    const setSelectedMotions = vi.fn<Dispatch<SetStateAction<FullDataMotion[]>>>();
    render(
      <MotionSelector
        availableMotions={availableMotions}
        selectedMotions={[]}
        setSelectedMotions={setSelectedMotions}
      />
    );
    fireEvent.click(screen.getByText("A"));
    expect(setSelectedMotions).toHaveBeenCalled();
  });
  it("空配列でも落ちない", () => {
    render(
      <MotionSelector
        availableMotions={[]}
        selectedMotions={[]}
        setSelectedMotions={() => {}}
      />
    );
    // Should render an empty list, so just check the list exists
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});

export {};

const motions: FullDataMotion[] = [
  {
    key: "0",
    name: "A",
    enName: "A",
    RSID: 1,
    RSName: "",
    colName: "",
    DamageTypeFixed: "斬",
    DamageTypeCustom: "",
    DamageAngleFixed: "",
    DamageAngleOffsetDeg: 0,
    Attack: 10,
    FixAttack: 0,
    GuardType: "",
    VersusGuardPower: 0,
    StageDamageTypeFixed: "",
    StageDamageExIDFixed: "",
    AttackAttrFixed: "",
    AttrLevel: 0,
    AttrValue: 1,
    AttackCond: "",
    IsForceCond: false,
    CondValue: 0,
    IsUseCondDefaultSec: false,
    CondCustomSec: 0,
    StunDamage: 0,
    FlagBit: "0",
    MultiHitTimer: 0,
    HealValue: 0,
    PriorityFixed: "0",
    PriorityTypeFixed: "",
    DisableContactPointAdjust: false,
    IsContactPointAdjustIgnoreDamageAngle: false,
    PorterDodgeFixed: "",
    ActionTypeFixed: "",
    PartsBreakRate: 0,
    ParryDamage: 0,
    RideDamage: 0,
    BattleRidingAttackType: "",
    RidingScarDamage: 0,
    RidingSuccessDamageRawScar: 0,
    IsSkillHien: false,
    IsPointAttack: false,
    IsPrePointHitReaction: false,
    TearScarCreateRate: 0,
    TearScarDamageRate: 0,
    RawScarDamageRate: 0,
    OldScarDamageRate: 0,
    IsScarForceChange: false,
    IsRawScarForce: false,
    IsRawScarLimit: false,
    IsWeakPointLimit: false,
    NoDamageReaction: false,
    IsMultiHitEmParts: false,
    MultiHitEmPartsMaxNum: 1,
    IsMultiHitEmWeak: false,
    MultiHitEmWeakMaxNum: 0,
    MultiHitRateCurve: "",
    IsLaserGuardCounter: false,
    IsWpPhysicalAttack: false,
    IsNoUseKireaji: false,
    IsForceUseKireajiAttackRate: false,
    IsCustomKireajiReduce: false,
    CustomKireajiReduce: 0,
    UseStatusAttackPower: false,
    UseStatusAttrPower: false,
    StatusAttrRate: 0,
    StatusConditionRate: 0,
    UseSkillAdditionalDamage: false,
    UseSkillContinuousAttack: false,
    MultiHitStatusRateCurve: "",
    IsNoCritical: false,
    IsCustomShockAbsorberRate: false,
    CustomShockAbsorberRate: 0,
    IsGestureAttack: false,
    HitEffectTypeFixed: "",
    DisableHitEffect: "false",
    HitEffectAngleZ: 0,
    HitEffectAngleX: 0,
    HitEffectOverwriteConnectID: 0,
    GeneralValue1: 0,
    GeneralValue2: 0,
    GeneralValue3: 0,
    FriendDamageTypeFixed: "",
    IsSensor: false,
    CameraShakeGuid: "",
    IsEnableMotSeqCameraShake: false,
    IgnoreRecoil: false,
    HitStopType: "",
    HitStopIgnoreResponse: false,
    RSKName: "",
    colShapeName: "",
    GroupIndex: 0,
    GName: "",
    GLayerIndex: 0,
    GShapeNames: "",
    GJointNames1: "",
    GJointNames2: "",
    GShapeTypes: "",
    GShapeParams: "",
  },
  {
    key: "1",
    MultiHitEmPartsMaxNum: 2,
    name: "B",
    enName: "B",
    RSID: 2,
    RSName: "",
    colName: "",
    DamageTypeFixed: "斬",
    DamageTypeCustom: "",
    DamageAngleFixed: "",
    DamageAngleOffsetDeg: 0,
    Attack: 20,
    FixAttack: 0,
    GuardType: "",
    VersusGuardPower: 0,
    StageDamageTypeFixed: "",
    StageDamageExIDFixed: "",
    AttackAttrFixed: "",
    AttrLevel: 0,
    AttrValue: 1,
    AttackCond: "",
    IsForceCond: false,
    CondValue: 0,
    IsUseCondDefaultSec: false,
    CondCustomSec: 0,
    StunDamage: 0,
    FlagBit: "0",
    MultiHitTimer: 0,
    HealValue: 0,
    PriorityFixed: "0", 
    PriorityTypeFixed: "",
    DisableContactPointAdjust: false,
    IsContactPointAdjustIgnoreDamageAngle: false,
    PorterDodgeFixed: "",
    ActionTypeFixed: "",
    PartsBreakRate: 0,
    ParryDamage: 0,
    RideDamage: 0,
    BattleRidingAttackType: "",
    RidingScarDamage: 0,
    RidingSuccessDamageRawScar: 0,
    IsSkillHien: false,
    IsPointAttack: false,
    IsPrePointHitReaction: false,
    TearScarCreateRate: 0,
    TearScarDamageRate: 0,
    RawScarDamageRate: 0,
    OldScarDamageRate: 0,
    IsScarForceChange: false,
    IsRawScarForce: false,
    IsRawScarLimit: false,
    IsWeakPointLimit: false,
    NoDamageReaction: false,
    IsMultiHitEmParts: false,
    IsMultiHitEmWeak: false,
    MultiHitEmWeakMaxNum: 0,
    MultiHitRateCurve: "",
    IsLaserGuardCounter: false,
    IsWpPhysicalAttack: false,
    IsNoUseKireaji: false,
    IsForceUseKireajiAttackRate: false,
    IsCustomKireajiReduce: false,
    CustomKireajiReduce: 0,
    UseStatusAttackPower: false,
    UseStatusAttrPower: false,
    StatusAttrRate: 0,
    StatusConditionRate: 0,
    UseSkillAdditionalDamage: false,
    UseSkillContinuousAttack: false,
    MultiHitStatusRateCurve: "",
    IsNoCritical: false,
    IsCustomShockAbsorberRate: false,
    CustomShockAbsorberRate: 0,
    IsGestureAttack: false,
    HitEffectTypeFixed: "",
    DisableHitEffect: "false",
    HitEffectAngleZ: 0,
    HitEffectAngleX: 0,
    HitEffectOverwriteConnectID: 0,
    GeneralValue1: 0,
    GeneralValue2: 0,
    GeneralValue3: 0,
    FriendDamageTypeFixed: "",
    IsSensor: false,
    CameraShakeGuid: "",
    IsEnableMotSeqCameraShake: false,
    IgnoreRecoil: false,
    HitStopType: "",
    HitStopIgnoreResponse: false,
    RSKName: "",
    colShapeName: "",
    GroupIndex: 0,
    GName: "",
    GLayerIndex: 0,
    GShapeNames: "",
    GJointNames1: "",
    GJointNames2: "",
    GShapeTypes: "",
    GShapeParams: "",
  },
];
