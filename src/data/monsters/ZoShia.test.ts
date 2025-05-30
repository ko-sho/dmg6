import ZoShia from './ZoShia';
import { describe, it, expect } from 'vitest';

describe('ZoShia モンスター定義', () => {
  it('全体構造・部位・状態・肉質が不変で正しい', () => {
    expect(ZoShia.name).toBe('ゾ・シア');
    expect(ZoShia.parts.map(p => p.name)).toEqual([
      '頭（白纏晶）', '頭', '頭2', '首', '胴体', '前脚', '後脚', '翼碗（白纏晶）', '翼碗', '翼碗2', '尻尾'
    ]);
    const expected = {
      '頭（白纏晶）': [
        { state: 'normal', slashHitZone: 40, bluntHitZone: 45, shotHitZone: 45, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 },
      ],
      '頭': [
        { state: 'normal', slashHitZone: 60, bluntHitZone: 65, shotHitZone: 60, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
        { state: 'wounded', slashHitZone: 70, bluntHitZone: 75, shotHitZone: 70, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
      ],
      '頭2': [
        { state: 'normal', slashHitZone: 65, bluntHitZone: 70, shotHitZone: 65, fireHitZone: 15, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 10, dragonHitZone: 30 },
        { state: 'wounded', slashHitZone: 75, bluntHitZone: 80, shotHitZone: 75, fireHitZone: 15, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 10, dragonHitZone: 30 },
      ],
      '首': [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 40, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 30 },
      ],
      '胴体': [
        { state: 'normal', slashHitZone: 25, bluntHitZone: 25, shotHitZone: 5, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '前脚': [
        { state: 'normal', slashHitZone: 45, bluntHitZone: 45, shotHitZone: 45, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 },
      ],
      '後脚': [
        { state: 'normal', slashHitZone: 25, bluntHitZone: 25, shotHitZone: 25, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
      '翼碗（白纏晶）': [
        { state: 'normal', slashHitZone: 40, bluntHitZone: 40, shotHitZone: 10, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 },
      ],
      '翼碗': [
        { state: 'normal', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 55, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 20 },
        { state: 'wounded', slashHitZone: 90, bluntHitZone: 90, shotHitZone: 65, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
        { state: 'exposed', slashHitZone: 100, bluntHitZone: 100, shotHitZone: 100, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
      ],
      '翼碗2': [
        { state: 'normal', slashHitZone: 85, bluntHitZone: 85, shotHitZone: 60, fireHitZone: 20, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 30 },
        { state: 'wounded', slashHitZone: 95, bluntHitZone: 95, shotHitZone: 70, fireHitZone: 20, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 30 },
      ],
      '尻尾': [
        { state: 'normal', slashHitZone: 35, bluntHitZone: 35, shotHitZone: 40, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
    };
    for (const part of ZoShia.parts) {
      expect(part.states).toEqual(expected[part.name as keyof typeof expected]);
    }
  });
});
export default {};
