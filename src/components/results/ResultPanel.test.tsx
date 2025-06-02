import { render, screen } from "@testing-library/react";
import ResultPanel from "./ResultPanel";
import type { ElementTypeKey, TachiSpiritGauge, WeaponType } from "../../models/Weapon";
import type { SharpnessColor } from "../../models/Sharpness";

describe("ResultPanel", () => {
  const baseMonster = {
    id: "test-monster",
    name: "Test Monster",
    parts: [],
    elementWeakness: {},
    ailmentWeakness: {},
    resistances: {},
    states: [],
  };
  const baseResult = {
    damageTableRows: [
      {
        part: "頭",
        state: "通常",
        damage: "1234",
        critDamage: "1500",
        expected: "1300",
        physical: 1000,
        elemental: 200,
        critRate: 0,
        baseWeaponMultiplier: 1,
        attackMultiplierBonus: 0,
        additionAttackBonus: 0,
        motionValue: 1,
        elementMultiplier: 1,
        elementBonus: 0,
        sharpnessModifier: 1,
        monsterPartModifier: 1,
        isCrit: false,
        criticalDamageModifier: 1,
        baseElementValue: 0,
        elementAddition: 0,
        elementModifier: 1,
      },
    ],
    selectedSkills: [],
    selectedMotions: [],
    selectedMonster: baseMonster,
    weaponInfo: {
      weaponType: "longsword" as WeaponType,
      weaponMultiplier: 200,
      baseElementValue: 0,
      elementType: { key: "none" as ElementTypeKey, label: "無属性" },
      criticalRate: 0,
      tachiSpiritGauge: "none" as TachiSpiritGauge,
    },
    sharpness: "white" as SharpnessColor,
  };
  it("パネルが表示される", () => {
    render(<ResultPanel result={baseResult} />);
    expect(screen.getByText("ダメージ表")).toBeInTheDocument();
  });
  it("nullや空配列でも落ちない", () => {
    render(<ResultPanel result={null} fallback={baseResult} />);
    expect(screen.getByText("ダメージ表")).toBeInTheDocument();
  });
});

export {};
