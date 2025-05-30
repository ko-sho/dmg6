import { render, screen } from '@testing-library/react';
import DamageCalculatorUI from './DamageCalculatorUI';

describe('DamageCalculatorUI', () => {
  it('renders the title', () => {
    render(<DamageCalculatorUI />);
    expect(screen.getByText(/Damage Calculator Tool/)).toBeInTheDocument();
  });
});
