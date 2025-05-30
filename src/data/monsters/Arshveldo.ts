import type { Monster } from '../../models/Monster';

const Arshveldo: Monster = {
  name: 'アルシュベルド',
  parts: [
    {
      name: '頭',
      states: [
        { state: 'normal', slashHitZone: 45, bluntHitZone: 48, shotHitZone: 45, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 45, bluntHitZone: 48, shotHitZone: 45, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
      ],
    },
    {
      name: '胴体',
      states: [
        { state: 'normal', slashHitZone: 28, bluntHitZone: 30, shotHitZone: 20, fireHitZone: 1, waterHitZone: 1, thunderHitZone: 1, iceHitZone: 1, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 60, bluntHitZone: 62, shotHitZone: 65, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '翼',
      states: [
        { state: 'normal', slashHitZone: 42, bluntHitZone: 40, shotHitZone: 38, fireHitZone: 2, waterHitZone: 2, thunderHitZone: 2, iceHitZone: 2, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 60, bluntHitZone: 63, shotHitZone: 65, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '鎖翼刃',
      states: [
        { state: 'normal', slashHitZone: 50, bluntHitZone: 50, shotHitZone: 45, fireHitZone: 0, waterHitZone: 0, thunderHitZone: 0, iceHitZone: 0, dragonHitZone: 0 },
        { state: 'wounded', slashHitZone: 70, bluntHitZone: 70, shotHitZone: 68, fireHitZone: 30, waterHitZone: 3, thunderHitZone: 3, iceHitZone: 3, dragonHitZone: 38 },
        { state: 'exposed', slashHitZone: 52, bluntHitZone: 52, shotHitZone: 48, fireHitZone: 20, waterHitZone: 20, thunderHitZone: 20, iceHitZone: 20, dragonHitZone: 25 },
      ],
    },
    {
      name: '脚',
      states: [
        { state: 'normal', slashHitZone: 26, bluntHitZone: 25, shotHitZone: 20, fireHitZone: 2, waterHitZone: 2, thunderHitZone: 2, iceHitZone: 2, dragonHitZone: 4 },
        { state: 'wounded', slashHitZone: 60, bluntHitZone: 62, shotHitZone: 65, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '尻尾',
      states: [
        { state: 'normal', slashHitZone: 45, bluntHitZone: 40, shotHitZone: 42, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 60, bluntHitZone: 62, shotHitZone: 65, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
  ],
};

export default Arshveldo;
