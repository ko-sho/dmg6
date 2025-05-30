import { Monster, type MonsterPart } from '../../models/Monster';

const UzTunaParts: MonsterPart[] = [
  {
    name: '頭',
    states: [
      { state: 'normal', slashHitZone: 40, bluntHitZone: 60, shotHitZone: 50, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 20, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'wounded', slashHitZone: 88, bluntHitZone: 90, shotHitZone: 88, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'exposed', slashHitZone: 90, bluntHitZone: 90, shotHitZone: 86, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
  {
    name: '胴体',
    states: [
      { state: 'normal', slashHitZone: 50, bluntHitZone: 45, shotHitZone: 35, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'wounded', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
  {
    name: '前脚',
    states: [
      { state: 'normal', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 55, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'wounded', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
  {
    name: '後脚',
    states: [
      { state: 'normal', slashHitZone: 55, bluntHitZone: 55, shotHitZone: 45, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'wounded', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
  {
    name: '尻尾',
    states: [
      { state: 'normal', slashHitZone: 45, bluntHitZone: 45, shotHitZone: 40, fireHitZone: 5, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
      { state: 'wounded', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
  {
    name: 'ヴェール',
    states: [
      { state: 'normal', slashHitZone: 90, bluntHitZone: 60, shotHitZone: 60, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
    ],
  },
];

const UzTuna = new Monster('ウズ・トゥナ', UzTunaParts);

export default UzTuna;
