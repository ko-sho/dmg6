import { render, screen } from '@testing-library/react';
import SkillLevelTable from './SkillLevelTable';

describe('SkillLevelTable', () => {
  const skills = [
    { key: 'attackBoost', level: 3, skillData: [{ minHitZone: 0, maxHitZone: 100 }] },
    { key: 'criticalEye', level: 2, skillData: [{ minHitZone: 0, maxHitZone: 100 }] },
  ];
  it('スキルレベルテーブルが表示される', () => {
    render(<SkillLevelTable selectedSkills={skills} />);
    expect(screen.getByText('attackBoost')).toBeInTheDocument();
    expect(screen.getByText('criticalEye')).toBeInTheDocument();
  });
  it('空配列でも落ちない', () => {
    const { container } = render(<SkillLevelTable selectedSkills={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});

export {};
