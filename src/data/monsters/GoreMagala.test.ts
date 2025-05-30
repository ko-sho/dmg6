import GoreMagala from './GoreMagala';
import { describe, it, expect } from 'vitest';

describe('GoreMagala モンスター定義', () => {
  it('全体構造・部位・状態・肉質が不変で正しい', () => {
    expect(GoreMagala.name).toBe('ゴア・マガラ');
    expect(GoreMagala.parts.map(p => p.name)).toEqual([
      "頭", "触角", "口", "首", "胴体", "翼", "翼脚", "翼脚（変化時）", "前脚", "後脚", "尻尾",
    ]);
    const expected = {
      '頭': [
        { state: 'normal', slashHitZone: 65, bluntHitZone: 55, shotHitZone: 45, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 },
        { state: 'wounded', slashHitZone: 75, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 },
      ],
      '触角': [
        { state: 'normal', slashHitZone: 75, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 25 },
        { state: 'wounded', slashHitZone: 80, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 25 },
      ],
      '口': [
        { state: 'exposed', slashHitZone: 75, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 },
      ],
      '首': [
        { state: 'normal', slashHitZone: 45, bluntHitZone: 45, shotHitZone: 25, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '胴体': [
        { state: 'normal', slashHitZone: 25, bluntHitZone: 25, shotHitZone: 20, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '翼': [
        { state: 'normal', slashHitZone: 26, bluntHitZone: 26, shotHitZone: 15, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '翼脚': [
        { state: 'normal', slashHitZone: 27, bluntHitZone: 27, shotHitZone: 20, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '翼脚（変化時）': [
        { state: 'normal', slashHitZone: 60, bluntHitZone: 55, shotHitZone: 45, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '前脚': [
        { state: 'normal', slashHitZone: 42, bluntHitZone: 42, shotHitZone: 25, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '後脚': [
        { state: 'normal', slashHitZone: 38, bluntHitZone: 38, shotHitZone: 25, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '尻尾': [
        { state: 'normal', slashHitZone: 38, bluntHitZone: 38, shotHitZone: 25, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    };
    for (const part of GoreMagala.parts) {
      expect(part.states).toEqual(expected[part.name as keyof typeof expected]);
    }
  });
});
export default {};
