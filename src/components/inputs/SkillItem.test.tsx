import { render, screen } from "@testing-library/react";
import SkillItem from "./SkillItem";

describe("SkillItem", () => {
  const skill = {
    key: "attackBoost",
    label: "攻撃",
    maxLevel: 3,
    skillLevels: [
      {
        level: 1,
        skillBonuses: [
          {
            additionAttackBonus: 3,
            minHitZone: 0,
            maxHitZone: 0,
            description: "攻撃+3",
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            additionAttackBonus: 6,
            minHitZone: 0,
            maxHitZone: 0,
            description: "攻撃+6",
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            additionAttackBonus: 9,
            minHitZone: 0,
            maxHitZone: 0,
            description: "攻撃+9",
          },
        ],
      },
    ],
  };

  it("スキル名が表示される", () => {
    render(
      <SkillItem
        skill={skill}
        selectedSkill={undefined}
        setSelectedSkill={() => {}}
        weaponType="sword"
      />
    );
    expect(screen.getByText("攻撃")).toBeInTheDocument();
  });

  it("選択時にレベルセレクトと説明文が表示される", () => {
    render(
      <SkillItem
        skill={skill}
        selectedSkill={{
          key: "attackBoost",
          level: 2,
          skillData: [
            {
              additionAttackBonus: 6,
              minHitZone: 0,
              maxHitZone: 0,
              description: "攻撃+6",
            },
          ],
        }}
        setSelectedSkill={() => {}}
        weaponType="sword"
      />
    );
    expect(screen.getByText("Lv2")).toBeInTheDocument();
    expect(screen.getByText("攻撃+6")).toBeInTheDocument();
  });
});
