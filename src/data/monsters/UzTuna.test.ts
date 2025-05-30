import UzTuna from './UzTuna';
import { describe, it, expect } from 'vitest';

describe('UzTuna モンスター定義', () => {
  it('全体構造・部位・状態・肉質が不変で正しい', () => {
    expect(UzTuna.name).toBe('ウズ・トゥナ');
    expect(UzTuna.parts.map(p => p.name)).toEqual([
      '頭', '胴体', '前脚', '後脚', '尻尾', 'ヴェール'
    ]);
    const expected = {
      '頭': [
        { state: 'normal', slashHitZone: 40, bluntHitZone: 40, shotHitZone: 40, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 20, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 88, bluntHitZone: 88, shotHitZone: 88, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'exposed', slashHitZone: 90, bluntHitZone: 90, shotHitZone: 90, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      ],
      '胴体': [
        { state: 'normal', slashHitZone: 50, bluntHitZone: 50, shotHitZone: 50, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      ],
      '前脚': [
        { state: 'normal', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      ],
      '後脚': [
        { state: 'normal', slashHitZone: 55, bluntHitZone: 55, shotHitZone: 55, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      ],
      '尻尾': [
        { state: 'normal', slashHitZone: 45, bluntHitZone: 45, shotHitZone: 45, fireHitZone: 5, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      ],
      'ヴェール': [
        { state: 'normal', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      ],
    };
    for (const part of UzTuna.parts) {
      expect(part.states).toEqual(expected[part.name as keyof typeof expected]);
    }
  });
});
export default {};
