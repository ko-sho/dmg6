import NuEgdra from './NuEgdra';
import { describe, it, expect } from 'vitest';

describe('NuEgdra モンスター定義', () => {
  it('全体構造・部位・状態・肉質が不変で正しい', () => {
    expect(NuEgdra.name).toBe('ヌ・エグドラ');
    expect(NuEgdra.parts.map(p => p.name)).toEqual([
      '頭', '口', '胴体', '触腕', '傘膜', '腕6本'
    ]);
    const expected = {
      '頭': [
        { state: 'normal', slashHitZone: 70, bluntHitZone: 70, shotHitZone: 70, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '口': [
        { state: 'normal', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 0, waterHitZone: 20, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '胴体': [
        { state: 'normal', slashHitZone: 50, bluntHitZone: 50, shotHitZone: 50, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '触腕': [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 30, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '傘膜': [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 30, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '腕6本': [
        { state: 'normal', slashHitZone: 55, bluntHitZone: 55, shotHitZone: 55, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    };
    for (const part of NuEgdra.parts) {
      expect(part.states).toEqual(expected[part.name as keyof typeof expected]);
    }
  });
});
export default {};
