import type { Monster } from '../../models/Monster';

const ZoShia: Monster = {
  name: 'ゾ・シア',
  parts: [
    {
      name: '頭（白纏晶）',
      states: [
        { state: 'normal', slashHitZone: 40, bluntHitZone: 45, shotHitZone: 45, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '頭',
      states: [
        { state: 'normal', slashHitZone: 60, bluntHitZone: 65, shotHitZone: 60, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
        { state: 'wounded', slashHitZone: 70, bluntHitZone: 75, shotHitZone: 70, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
      ],
    },
    {
      name: '頭2',
      states: [
        { state: 'normal', slashHitZone: 65, bluntHitZone: 70, shotHitZone: 65, fireHitZone: 15, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 10, dragonHitZone: 30 },
        { state: 'wounded', slashHitZone: 75, bluntHitZone: 80, shotHitZone: 75, fireHitZone: 15, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 10, dragonHitZone: 30 },
      ],
    },
    {
      name: '首',
      states: [
        { state: 'normal', slashHitZone: 30, bluntHitZone: 30, shotHitZone: 40, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 30 },
      ],
    },
    {
      name: '胴体',
      states: [
        { state: 'normal', slashHitZone: 25, bluntHitZone: 25, shotHitZone: 5, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '前脚',
      states: [
        { state: 'normal', slashHitZone: 45, bluntHitZone: 45, shotHitZone: 45, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '後脚',
      states: [
        { state: 'normal', slashHitZone: 25, bluntHitZone: 25, shotHitZone: 25, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '翼碗（白纏晶）',
      states: [
        { state: 'normal', slashHitZone: 40, bluntHitZone: 40, shotHitZone: 10, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '翼碗',
      states: [
        { state: 'normal', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 55, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 20 },
        { state: 'wounded', slashHitZone: 90, bluntHitZone: 90, shotHitZone: 65, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
        { state: 'exposed', slashHitZone: 100, bluntHitZone: 100, shotHitZone: 100, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
      ],
    },
    {
      name: '翼碗2',
      states: [
        { state: 'normal', slashHitZone: 85, bluntHitZone: 85, shotHitZone: 60, fireHitZone: 20, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 30 },
        { state: 'wounded', slashHitZone: 95, bluntHitZone: 95, shotHitZone: 70, fireHitZone: 20, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 30 },
      ],
    },
    {
      name: '尻尾',
      states: [
        { state: 'normal', slashHitZone: 35, bluntHitZone: 35, shotHitZone: 40, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
  ],
};

export default ZoShia;
