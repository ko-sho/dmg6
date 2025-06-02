import { describe, it, expect } from 'vitest';
import { TACHI_SPIRIT_GAUGE_MODIFIER } from './TachiSpiritGaugeBonus';

// TACHI_SPIRIT_GAUGE_MODIFIER の不変データテスト

describe('TACHI_SPIRIT_GAUGE_MODIFIER', () => {
  it('不変のスピリットゲージ補正値が正しい', () => {
    expect(TACHI_SPIRIT_GAUGE_MODIFIER).toEqual({
      none: 1.0,
      white: 1.025,
      yellow: 1.05,
      red: 1.1,
    });
  });
});
