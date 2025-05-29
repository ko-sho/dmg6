import { Monster, type MonsterPart } from '../../models/Monster';

const UzTunaParts: MonsterPart[] = [
  {
    name: '頭',
    states: [
      { state: 'normal', physicalHitZone: 40, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 20, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'wounded', physicalHitZone: 88, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'exposed', physicalHitZone: 90, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
  {
    name: '胴体',
    states: [
      { state: 'normal', physicalHitZone: 50, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'wounded', physicalHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
  {
    name: '前脚',
    states: [
      { state: 'normal', physicalHitZone: 65, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'wounded', physicalHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
  {
    name: '後脚',
    states: [
      { state: 'normal', physicalHitZone: 55, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'wounded', physicalHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
  {
    name: '尻尾',
    states: [
      { state: 'normal', physicalHitZone: 45, fireHitZone: 5, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'wounded', physicalHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
  {
    name: 'ヴェール',
    states: [
      { state: 'normal', physicalHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
];

const UzTuna = new Monster('ウズ・トゥナ', UzTunaParts);

export default UzTuna;
