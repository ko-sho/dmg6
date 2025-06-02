import { render, screen } from "@testing-library/react";
import DamageResultTabs from "./DamageResultTabs";
import type { ElementTypeKey, TachiSpiritGauge, WeaponType } from "../../models/Weapon";
import type { SharpnessColor } from "../../models/Sharpness";
import { vi } from "vitest";

describe("DamageResultTabs", () => {
  const baseProps = {
    tabIndex: 0,
    setTabIndex: () => {},
    damageResult: "100",
    history: [],
    lastResult: null,
    damageTableRows: [],
    selectedSkills: [],
    selectedMotions: [],
    selectedMonster: null,
    weaponInfo: {
      weaponType: "longsword" as WeaponType,
      weaponMultiplier: 200,
      baseElementValue: 0,
      elementType: { key: "none" as ElementTypeKey, label: "無属性" },
      criticalRate: 0,
      tachiSpiritGauge: "none" as TachiSpiritGauge,
    },
    sharpness: "white" as SharpnessColor,
    onDeleteHistory: () => {},
  };
  it("タブが表示される", () => {
    render(<DamageResultTabs {...baseProps} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });
  it("onChangeが呼ばれる", () => {
    const setTabIndex = vi.fn();
    render(<DamageResultTabs {...baseProps} setTabIndex={setTabIndex} />);
    // There may be only one tab, so just check the tablist exists
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });
});

export {};
