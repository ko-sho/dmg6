import type { Monster } from '../../models/Monster';

const NuEgdra: Monster = {
  name: 'ヌ・エグドラ',
  parts: [
    {
      name: '頭',
      states: [
        { state: 'normal', slashHitZone: 70, bluntHitZone: 70, shotHitZone: 70, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '口',
      states: [
        { state: 'normal', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 0, waterHitZone: 20, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '胴体',
      states: [
        { state: 'normal', slashHitZone: 50, bluntHitZone: 50, shotHitZone: 50, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '触腕',
      states: [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 30, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '傘膜',
      states: [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 30, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '腕6本',
      states: [
        { state: 'normal', slashHitZone: 55, bluntHitZone: 55, shotHitZone: 55, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
  ],
};

export default NuEgdra;
