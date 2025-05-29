import type { Monster } from '../../models/Monster';

const NuEgdra: Monster = {
  name: 'ヌ・エグドラ',
  parts: [
    {
      name: '頭',
      states: [
        { state: 'normal', slashHitZone: 55, bluntHitZone: 55, shotHitZone: 55, fireHitZone: 10, waterHitZone: 10, thunderHitZone: 10, iceHitZone: 10, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 60, bluntHitZone: 60, shotHitZone: 60, fireHitZone: 15, waterHitZone: 15, thunderHitZone: 15, iceHitZone: 15, dragonHitZone: 15 },
      ],
    },
    {
      name: '胴体',
      states: [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 30, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 35, bluntHitZone: 35, shotHitZone: 35, fireHitZone: 10, waterHitZone: 10, thunderHitZone: 10, iceHitZone: 10, dragonHitZone: 10 },
      ],
    },
    {
      name: '翼',
      states: [
        { state: 'normal', slashHitZone: 25, bluntHitZone: 25, shotHitZone: 25, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 30, fireHitZone: 10, waterHitZone: 10, thunderHitZone: 10, iceHitZone: 10, dragonHitZone: 10 },
      ],
    },
    {
      name: '脚',
      states: [
        { state: 'normal', slashHitZone: 20, bluntHitZone: 20, shotHitZone: 20, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 25, bluntHitZone: 25, shotHitZone: 25, fireHitZone: 10, waterHitZone: 10, thunderHitZone: 10, iceHitZone: 10, dragonHitZone: 10 },
      ],
    },
    {
      name: '尻尾',
      states: [
        { state: 'normal', slashHitZone: 25, bluntHitZone: 25, shotHitZone: 25, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 30, fireHitZone: 10, waterHitZone: 10, thunderHitZone: 10, iceHitZone: 10, dragonHitZone: 10 },
      ],
    },
  ],
};

export default NuEgdra;
