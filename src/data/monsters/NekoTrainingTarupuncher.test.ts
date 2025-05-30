import NekoTrainingTarupuncher from './NekoTrainingTarupuncher';
import { describe, it, expect } from 'vitest';

describe('NekoTrainingTarupuncher モンスター定義', () => {
  it('全体構造・部位・状態・肉質が不変で正しい', () => {
    expect(NekoTrainingTarupuncher.name).toBe('ネコ式訓練タルパンチャー');
    expect(NekoTrainingTarupuncher.parts.map(p => p.name)).toEqual([
      'やわらかい', 'かたい', '傷'
    ]);
    const expected = {
      'やわらかい': [
        { state: 'normal', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 30, waterHitZone: 30, thunderHitZone: 30, iceHitZone: 30, dragonHitZone: 30 },
      ],
      'かたい': [
        { state: 'normal', slashHitZone: 40, bluntHitZone: 40, shotHitZone: 40, fireHitZone: 15, waterHitZone: 15, thunderHitZone: 15, iceHitZone: 15, dragonHitZone: 15 },
      ],
      '傷': [
        { state: 'wounded', slashHitZone: 100, bluntHitZone: 100, shotHitZone: 100, fireHitZone: 30, waterHitZone: 30, thunderHitZone: 30, iceHitZone: 30, dragonHitZone: 30 },
      ],
    } as const;
    for (const part of NekoTrainingTarupuncher.parts) {
      expect(part.states).toEqual(expected[part.name as keyof typeof expected]);
    }
  });
});
export default {};
