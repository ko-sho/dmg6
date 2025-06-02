import { render, screen } from '@testing-library/react';
import MotionSection from './MotionSection';
import type { MotionAttackType } from '../../models/Motion';

describe('MotionSection', () => {
  const availableMotions = [
    {
      key: "a",
      label: "A",
      motionData: {
        name: "A",
        motionValue: 10,
        elementMultiplier: 1,
        sharpnessModifier: 1,
        hitCount: 1,
        attackType: "slash" as MotionAttackType,
      },
    },
    {
      key: "b",
      label: "B",
      motionData: {
        name: "B",
        motionValue: 20,
        elementMultiplier: 1,
        sharpnessModifier: 1,
        hitCount: 1,
        attackType: "slash" as MotionAttackType,
      },
    },
  ];
  it('見出しが表示される', () => {
    render(<MotionSection availableMotions={availableMotions} selectedMotions={[]} setSelectedMotions={() => {}} />);
    expect(screen.getByText(/モーション/)).toBeInTheDocument();
  });
  it('propsで渡したモーションがリストに表示される', () => {
    render(<MotionSection availableMotions={availableMotions} selectedMotions={[]} setSelectedMotions={() => {}} />);
    // Accordion is collapsed by default, so expand it
    const summary = screen.getByRole('button', { name: /モーション/ });
    summary.click();
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });
  it('空配列でもクラッシュしない', () => {
    render(<MotionSection availableMotions={[]} selectedMotions={[]} setSelectedMotions={() => {}} />);
    expect(screen.getByText(/モーション/)).toBeInTheDocument();
  });
});

export {};
