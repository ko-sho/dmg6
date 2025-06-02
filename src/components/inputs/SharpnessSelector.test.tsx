import { render, screen, fireEvent } from '@testing-library/react';
import SharpnessSelector from './SharpnessSelector';
import { SHARPNESS_LEVELS } from '../../models/Sharpness';
import { vi } from 'vitest';

describe('SharpnessSelector', () => {
  it('全ての切れ味ボタンが表示される', () => {
    const onChange = vi.fn();
    render(<SharpnessSelector value={'white'} onChange={onChange} />);
    SHARPNESS_LEVELS.forEach((level: { color: string; }) => {
      expect(screen.getByText(level.color === 'red' ? '赤' :
        level.color === 'orange' ? '橙' :
        level.color === 'yellow' ? '黄' :
        level.color === 'green' ? '緑' :
        level.color === 'blue' ? '青' :
        level.color === 'white' ? '白' : '')).toBeInTheDocument();
    });
  });

  it('選択中の切れ味ボタンがactiveになる', () => {
    const onChange = vi.fn();
    render(<SharpnessSelector value={'blue'} onChange={onChange} />);
    const blueBtn = screen.getByText('青');
    // MUIのToggleButtonはbutton要素自身にaria-pressed属性が付与される
    expect(blueBtn.closest('button')?.getAttribute('aria-pressed')).toBe('true');
  });

  it('ボタンをクリックするとonChangeが呼ばれる', () => {
    const onChange = vi.fn();
    render(<SharpnessSelector value={'red'} onChange={onChange} />);
    const whiteBtn = screen.getByText('白');
    fireEvent.click(whiteBtn);
    expect(onChange).toHaveBeenCalledWith('white');
  });
});
