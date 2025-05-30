import type { Monster } from '../../models/Monster';

const NuEgdra: Monster = {
  name: 'ヌ・エグドラ',
  parts: [
    {
      name: '頭',
      states: [
        { state: 'normal', slashHitZone: 70, bluntHitZone: 75, shotHitZone: 50, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 80, bluntHitZone: 85, shotHitZone: 60, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
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
        { state: 'normal', slashHitZone: 50, bluntHitZone: 65, shotHitZone: 43, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 75, shotHitZone: 58, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '触腕',
      states: [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 43, shotHitZone: 25, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '傘膜',
      states: [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 43, shotHitZone: 25, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 75, shotHitZone: 58, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '腕6本',
      states: [
        { state: 'normal', slashHitZone: 55, bluntHitZone: 48, shotHitZone: 48, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 75, shotHitZone: 58, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
  ],
};

export default NuEgdra;
