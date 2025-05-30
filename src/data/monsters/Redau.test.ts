import Redau from './Redau';
import { describe, it, expect } from 'vitest';

describe('Redau モンスター定義', () => {
  it('全体構造・部位・状態・肉質が不変で正しい', () => {
    expect(Redau.name).toBe('レ・ダウ');
    expect(Redau.parts.map(p => p.name)).toEqual([
      '頭', '胴体', '翼', '脚', '尻尾'
    ]);
    const expected = {
      '頭': [
        { state: 'normal', slashHitZone: 60, bluntHitZone: 65, shotHitZone: 50, fireHitZone: 5, waterHitZone: 15, iceHitZone: 20, thunderHitZone: 0, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 70, bluntHitZone: 75, shotHitZone: 60, fireHitZone: 5, waterHitZone: 20, iceHitZone: 25, thunderHitZone: 0, dragonHitZone: 5 },
        { state: 'exposed', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 70, fireHitZone: 5, waterHitZone: 20, iceHitZone: 25, thunderHitZone: 0, dragonHitZone: 5 },
      ],
      '胴体': [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 25, fireHitZone: 5, waterHitZone: 5, iceHitZone: 5, thunderHitZone: 0, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 55, fireHitZone: 5, waterHitZone: 10, iceHitZone: 15, thunderHitZone: 0, dragonHitZone: 5 },
      ],
      '翼': [
        { state: 'normal', slashHitZone: 45, bluntHitZone: 50, shotHitZone: 45, fireHitZone: 5, waterHitZone: 10, iceHitZone: 15, thunderHitZone: 0, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 55, fireHitZone: 5, waterHitZone: 10, iceHitZone: 15, thunderHitZone: 0, dragonHitZone: 5 },
      ],
      '脚': [
        { state: 'normal', slashHitZone: 37, bluntHitZone: 37, shotHitZone: 33, fireHitZone: 5, waterHitZone: 5, iceHitZone: 5, thunderHitZone: 0, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 55, fireHitZone: 5, waterHitZone: 10, iceHitZone: 15, thunderHitZone: 0, dragonHitZone: 5 },
      ],
      '尻尾': [
        { state: 'normal', slashHitZone: 45, bluntHitZone: 40, shotHitZone: 45, fireHitZone: 5, waterHitZone: 5, iceHitZone: 10, thunderHitZone: 0, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 55, fireHitZone: 5, waterHitZone: 10, iceHitZone: 15, thunderHitZone: 0, dragonHitZone: 5 },
      ],
    };
    for (const part of Redau.parts) {
      expect(part.states).toEqual(expected[part.name as keyof typeof expected]);
    }
  });
});
export default {};
