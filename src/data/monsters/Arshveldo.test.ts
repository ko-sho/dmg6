import Arshveldo from './Arshveldo';
import { describe, it, expect } from 'vitest';

describe('Arshveldo モンスター定義', () => {
  it('全体構造・部位・状態・肉質が不変で正しい', () => {
    // モンスター名
    expect(Arshveldo.name).toBe('アルシュベルド');
    // 部位名リスト
    expect(Arshveldo.parts.map(p => p.name)).toEqual([
      '頭', '胴体', '翼', '鎖翼刃', '脚', '尻尾'
    ]);
    // 部位ごとの状態・肉質
    const expected = {
      '頭': [
        { state: 'normal', slashHitZone: 45, bluntHitZone: 45, shotHitZone: 45, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 45, bluntHitZone: 45, shotHitZone: 45, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
      ],
      '胴体': [
        { state: 'normal', slashHitZone: 28, bluntHitZone: 28, shotHitZone: 28, fireHitZone: 1, waterHitZone: 1, thunderHitZone: 1, iceHitZone: 1, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 60, bluntHitZone: 60, shotHitZone: 60, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 },
      ],
      '翼': [
        { state: 'normal', slashHitZone: 42, bluntHitZone: 42, shotHitZone: 42, fireHitZone: 2, waterHitZone: 2, thunderHitZone: 2, iceHitZone: 2, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 60, bluntHitZone: 60, shotHitZone: 60, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 },
      ],
      '鎖翼刃': [
        { state: 'normal', slashHitZone: 50, bluntHitZone: 50, shotHitZone: 50, fireHitZone: 0, waterHitZone: 0, thunderHitZone: 0, iceHitZone: 0, dragonHitZone: 0 },
        { state: 'wounded', slashHitZone: 70, bluntHitZone: 70, shotHitZone: 70, fireHitZone: 30, waterHitZone: 3, thunderHitZone: 3, iceHitZone: 3, dragonHitZone: 38 },
        { state: 'exposed', slashHitZone: 52, bluntHitZone: 52, shotHitZone: 52, fireHitZone: 20, waterHitZone: 20, thunderHitZone: 20, iceHitZone: 20, dragonHitZone: 25 },
      ],
      '脚': [
        { state: 'normal', slashHitZone: 26, bluntHitZone: 26, shotHitZone: 26, fireHitZone: 2, waterHitZone: 2, thunderHitZone: 2, iceHitZone: 2, dragonHitZone: 4 },
        { state: 'wounded', slashHitZone: 60, bluntHitZone: 60, shotHitZone: 60, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 },
      ],
      '尻尾': [
        { state: 'normal', slashHitZone: 45, bluntHitZone: 45, shotHitZone: 45, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 60, bluntHitZone: 60, shotHitZone: 60, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 },
      ],
    };
    for (const part of Arshveldo.parts) {
    expect(part.states).toEqual(expected[part.name as keyof typeof expected]);
    }
  });
});

export default {};
