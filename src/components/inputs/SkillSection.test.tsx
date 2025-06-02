import { render, screen } from '@testing-library/react';
import SkillSection from './SkillSection';
import { skillsByCategory } from '../../data/skills';

describe('SkillSection', () => {
  const skillCategories = ['weapon', 'armor'];
  const skillCategoryLabels = { weapon: '武器', armor: '防具' };
  it('見出しが表示される', () => {
    render(
      <SkillSection
        skillCategories={skillCategories}
        skillCategoryLabels={skillCategoryLabels}
        skillTab={0}
        setSkillTab={() => {}}
        skillsByCategory={skillsByCategory}
        selectedSkills={[]}
        setSelectedSkills={() => {}}
        weaponType='sword'
      />
    );
    expect(screen.getByText(/スキル/)).toBeInTheDocument();
  });
  it('propsで渡したスキルがリストに表示される', () => {
    render(
      <SkillSection
        skillCategories={skillCategories}
        skillCategoryLabels={skillCategoryLabels}
        skillTab={0}
        setSkillTab={() => {}}
        skillsByCategory={skillsByCategory}
        selectedSkills={[]}
        setSelectedSkills={() => {}}
        weaponType='sword'
      />
    );
    expect(screen.getByText('攻撃')).toBeInTheDocument();
    expect(screen.getByText('見切り')).toBeInTheDocument();
  });
  it('空配列でもクラッシュしない', () => {
    render(
      <SkillSection
        skillCategories={[]}
        skillCategoryLabels={{}}
        skillTab={0}
        setSkillTab={() => {}}
        skillsByCategory={{}}
        selectedSkills={[]}
        setSelectedSkills={() => {}}
        weaponType='sword'
      />
    );
    expect(screen.getByText(/スキル/)).toBeInTheDocument();
  });
});

export {};
