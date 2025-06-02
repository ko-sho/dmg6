import { render, screen } from "@testing-library/react";
import WeaponSection from "./WeaponSection";
import type {
  ElementTypeKey,
  TachiSpiritGauge,
  WeaponType,
} from "../../models/Weapon";

describe("WeaponSection", () => {
  const weapon = {
    weaponType: "longsword" as WeaponType,
    weaponMultiplier: 200,
    baseElementValue: 0,
    elementType: { key: "none" as ElementTypeKey, label: "無属性" },
    criticalRate: 0,
    tachiSpiritGauge: "none" as TachiSpiritGauge,
  };
  it("見出しが表示される", () => {
    render(
      <WeaponSection
        weapon={weapon}
        setWeapon={() => {}}
        sharpnessColor={"white"}
        setSharpnessColor={() => {}}
      />
    );
    expect(screen.getByText("武器")).toBeInTheDocument();
  });
  it("propsで渡した武器情報が反映される", () => {
    render(
      <WeaponSection
        weapon={weapon}
        setWeapon={() => {}}
        sharpnessColor={"white"}
        setSharpnessColor={() => {}}
      />
    );
    expect(screen.getByDisplayValue("200")).toBeInTheDocument();
  });
});

export {};
