import { Monster } from '../../models/Monster';

export const Redau = new Monster('レ・ダウ', [
  {
    name: '頭',
    states: [
      {
        state: 'normal',
        physicalHitZone: 60,
        fireHitZone: 5,
        waterHitZone: 15,
        iceHitZone: 20,
        thunderHitZone: 0,
        dragonHitZone: 5,
      },
      {
        state: 'wounded',
        physicalHitZone: 70,
        fireHitZone: 5,
        waterHitZone: 20,
        iceHitZone: 25,
        thunderHitZone: 0,
        dragonHitZone: 5,
      },
      {
        state: 'exposed',
        physicalHitZone: 80,
        fireHitZone: 5,
        waterHitZone: 20,
        iceHitZone: 25,
        thunderHitZone: 0,
        dragonHitZone: 5,
      },
    ],
  },
  {
    name: '胴体',
    states: [
      {
        state: 'normal',
        physicalHitZone: 30,
        fireHitZone: 5,
        waterHitZone: 5,
        iceHitZone: 5,
        thunderHitZone: 0,
        dragonHitZone: 5,
      },
      {
        state: 'wounded',
        physicalHitZone: 65,
        fireHitZone: 5,
        waterHitZone: 10,
        iceHitZone: 15,
        thunderHitZone: 0,
        dragonHitZone: 5,
      },
    ],
  },
  {
    name: '翼',
    states: [
      {
        state: 'normal',
        physicalHitZone: 45,
        fireHitZone: 5,
        waterHitZone: 10,
        iceHitZone: 15,
        thunderHitZone: 0,
        dragonHitZone: 5,
      },
      {
        state: 'wounded',
        physicalHitZone: 65,
        fireHitZone: 5,
        waterHitZone: 10,
        iceHitZone: 15,
        thunderHitZone: 0,
        dragonHitZone: 5,
      },
    ],
  },
  {
    name: '脚',
    states: [
      {
        state: 'normal',
        physicalHitZone: 37,
        fireHitZone: 5,
        waterHitZone: 5,
        iceHitZone: 5,
        thunderHitZone: 0,
        dragonHitZone: 5,
      },
      {
        state: 'wounded',
        physicalHitZone: 65,
        fireHitZone: 5,
        waterHitZone: 10,
        iceHitZone: 15,
        thunderHitZone: 0,
        dragonHitZone: 5,
      },
    ],
  },
  {
    name: '尻尾',
    states: [
      {
        state: 'normal',
        physicalHitZone: 45,
        fireHitZone: 5,
        waterHitZone: 5,
        iceHitZone: 10,
        thunderHitZone: 0,
        dragonHitZone: 5,
      },
      {
        state: 'wounded',
        physicalHitZone: 65,
        fireHitZone: 5,
        waterHitZone: 10,
        iceHitZone: 15,
        thunderHitZone: 0,
        dragonHitZone: 5,
      },
    ],
  },
]);

export default Redau;
