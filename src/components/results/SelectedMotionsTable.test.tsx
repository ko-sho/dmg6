import { render, screen } from '@testing-library/react';
import SelectedMotionsTable from './SelectedMotionsTable';

describe('SelectedMotionsTable', () => {
  const motions = [
    { name: 'A', motionValue: 10 },
    { name: 'B', motionValue: 20 },
  ];
  it('選択中モーションがテーブルに表示される', () => {
    render(<SelectedMotionsTable motions={motions} />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });
  it('空配列でも落ちない', () => {
    const { container } = render(<SelectedMotionsTable motions={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});

export {};
