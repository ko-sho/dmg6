import type { Monster } from '../../models/Monster';

const Redau: Monster = {
  name: 'レダウ',
  parts: [
    {
      name: '頭',
      states: [
        { state: 'normal', slashHitZone: 60, bluntHitZone: 60, shotHitZone: 60, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 10, dragonHitZone: 15 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 15, waterHitZone: 10, thunderHitZone: 15, iceHitZone: 15, dragonHitZone: 20 },
      ],
    },
    {
      name: '胴体',
      states: [
        { state: 'normal', slashHitZone: 25, bluntHitZone: 25, shotHitZone: 25, fireHitZone: 5, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 30, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 10, dragonHitZone: 15 },
      ],
    },
    {
      name: '翼',
      states: [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 30, fireHitZone: 5, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 35, bluntHitZone: 35, shotHitZone: 35, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 10, dragonHitZone: 15 },
      ],
    },
    {
      name: '脚',
      states: [
        { state: 'normal', slashHitZone: 20, bluntHitZone: 20, shotHitZone: 20, fireHitZone: 5, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 25, bluntHitZone: 25, shotHitZone: 25, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 10, dragonHitZone: 15 },
      ],
    },
    {
      name: '尻尾',
      states: [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 30, fireHitZone: 5, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 35, bluntHitZone: 35, shotHitZone: 35, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 10, dragonHitZone: 15 },
      ],
    },
  ],
};

export default Redau;
