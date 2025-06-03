export {};
import { render, screen } from "@testing-library/react";
import SelectedParamsSummary from "./SelectedParamsSummary";
import type { WeaponParameters } from "../../models/Weapon";
import type { SkillParameters } from "../../models/Skill";
import type { SharpnessColor } from "../../models/Sharpness";

describe("SelectedParamsSummary", () => {
  const baseWeapon: WeaponParameters = {
    weaponType: "longsword",
    weaponMultiplier: 220,
    baseElementValue: 0,
    elementType: { key: "none", label: "無属性" },
    criticalRate: 0,
  };
  const baseSkills: { key: string; level: number; skillData: SkillParameters[] }[] = [];
  const sharpness: SharpnessColor = "white";

  it("renders summary table with basic weapon info", () => {
    render(
      <SelectedParamsSummary
        weapon={baseWeapon}
        selectedSkills={baseSkills}
        sharpnessColor={sharpness}
      />
    );
    expect(screen.getByText("武器倍率")).toBeInTheDocument();
    expect(screen.getByText("220")).toBeInTheDocument();
    expect(screen.getByText("切れ味補正")).toBeInTheDocument();
  });

  it("shows element params if weapon has element", () => {
    const weapon = { ...baseWeapon, baseElementValue: 100, elementType: { key: "fire" as const, label: "火" } };
    render(
      <SelectedParamsSummary
        weapon={weapon}
        selectedSkills={baseSkills}
        sharpnessColor={sharpness}
      />
    );
    expect(screen.getByText("属性値")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });
});
