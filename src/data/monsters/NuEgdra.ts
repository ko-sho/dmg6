import type { Monster } from '../../models/Monster';

const NuEgdra: Monster = {
  name: 'ヌ・エグドラ',
  parts: [
    {
      name: '頭',
      states: [
        { state: 'normal', physicalHitZone: 70, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', physicalHitZone: 80, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '口',
      states: [
        { state: 'normal', physicalHitZone: 80, fireHitZone: 0, waterHitZone: 20, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '胴体',
      states: [
        { state: 'normal', physicalHitZone: 50, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', physicalHitZone: 65, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '触腕',
      states: [
        { state: 'normal', physicalHitZone: 30, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '傘膜',
      states: [
        { state: 'normal', physicalHitZone: 30, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', physicalHitZone: 65, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '腕6本',
      states: [
        { state: 'normal', physicalHitZone: 55, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', physicalHitZone: 65, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
  ],
};

export default NuEgdra;
