import { render, screen } from '@testing-library/react';
import SkillSelector from './SkillSelector';
import { vi } from 'vitest';

describe('SkillSelector', () => {
  const skills = [
    {
      key: 'attackBoost',
      label: '攻撃',
      maxLevel: 7,
      skillLevels: [
        { level: 1, skillBonuses: [{ attackBonus: 3, minHitZone: 0, maxHitZone: 0 }] },
        { level: 2, skillBonuses: [{ attackBonus: 6, minHitZone: 0, maxHitZone: 0 }] },
        { level: 3, skillBonuses: [{ attackBonus: 9, minHitZone: 0, maxHitZone: 0 }] },
        { level: 4, skillBonuses: [{ attackBonus: 12, minHitZone: 0, maxHitZone: 0 }] },
        { level: 5, skillBonuses: [{ attackBonus: 15, minHitZone: 0, maxHitZone: 0 }] },
        { level: 6, skillBonuses: [{ attackBonus: 18, minHitZone: 0, maxHitZone: 0 }] },
        { level: 7, skillBonuses: [{ attackBonus: 21, minHitZone: 0, maxHitZone: 0 }] },
      ],
    },
    {
      key: 'criticalEye',
      label: '見切り',
      maxLevel: 5,
      skillLevels: [
        { level: 1, skillBonuses: [{ criticalRateBonus: 4, minHitZone: 0, maxHitZone: 0 }] },
        { level: 2, skillBonuses: [{ criticalRateBonus: 8, minHitZone: 0, maxHitZone: 0 }] },
        { level: 3, skillBonuses: [{ criticalRateBonus: 12, minHitZone: 0, maxHitZone: 0 }] },
        { level: 4, skillBonuses: [{ criticalRateBonus: 16, minHitZone: 0, maxHitZone: 0 }] },
        { level: 5, skillBonuses: [{ criticalRateBonus: 20, minHitZone: 0, maxHitZone: 0 }] },
      ],
    },
  ];

  it('全てのスキルが表示される', () => {
    render(
      <SkillSelector skills={skills} selectedSkills={[]} setSelectedSkills={vi.fn()} weaponType='sword' />
    );
    expect(screen.getByText('攻撃')).toBeInTheDocument();
    expect(screen.getByText('見切り')).toBeInTheDocument();
  });

  it('スキルを選択したときsetSelectedSkillsが呼ばれる', () => {
    const setSelectedSkills = vi.fn();
    render(
      <SkillSelector skills={skills} selectedSkills={[]} setSelectedSkills={setSelectedSkills} weaponType='sword' />
    );
    // SkillItemのチェックボックスを取得してクリック
    const attackCheckbox = screen.getByLabelText('攻撃');
    attackCheckbox.click();
    expect(setSelectedSkills).toHaveBeenCalled();
  });

  it('スキルを解除したときsetSelectedSkillsが呼ばれる', () => {
    const setSelectedSkills = vi.fn();
    // 既に攻撃Lv3が選択されている状態
    render(
      <SkillSelector
        skills={skills}
        selectedSkills={[{ key: 'attackBoost', level: 3, skillData: [{ additionAttackBonus: 9, minHitZone: 0, maxHitZone: 0 }] }]}
        setSelectedSkills={setSelectedSkills}
        weaponType='sword'
      />
    );
    const attackCheckbox = screen.getByLabelText('攻撃');
    attackCheckbox.click();
    expect(setSelectedSkills).toHaveBeenCalled();
  });

  it('selectedSkillsがUIに正しく反映される', () => {
    render(
      <SkillSelector
        skills={skills}
        selectedSkills={[{ key: 'attackBoost', level: 3, skillData: [{ additionAttackBonus: 9, minHitZone: 0, maxHitZone: 0 }] }]}
        setSelectedSkills={vi.fn()}
        weaponType='sword'
      />
    );
    // SkillItemのレベル表示やチェック状態が反映されているか（ラベルやaria-checked属性等で判定）
    const attackCheckbox = screen.getByLabelText('攻撃');
    expect(attackCheckbox).toBeChecked();
    // レベル表示（SkillItemのUI仕様に応じて適宜修正）
    expect(screen.getByText('Lv3')).toBeInTheDocument();
  });

  // SkillItemのUIやonChangeの伝播はSkillItemのテストで担保する前提
});
