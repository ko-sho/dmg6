import type { Monster } from '../../models/Monster';

const ZoShia: Monster = {
  name: 'ゾ・シア',
  parts: [
    {
      name: '頭（白纏晶）',
      states: [
        { state: 'normal', physicalHitZone: 40, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '頭',
      states: [
        { state: 'normal', physicalHitZone: 60, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
        { state: 'wounded', physicalHitZone: 70, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
      ],
    },
    {
      name: '頭2',
      states: [
        { state: 'normal', physicalHitZone: 65, fireHitZone: 15, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 10, dragonHitZone: 30 },
        { state: 'wounded', physicalHitZone: 75, fireHitZone: 15, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 10, dragonHitZone: 30 },
      ],
    },
    {
      name: '首',
      states: [
        { state: 'normal', physicalHitZone: 30, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 30 },
      ],
    },
    {
      name: '胴体',
      states: [
        { state: 'normal', physicalHitZone: 25, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '前脚',
      states: [
        { state: 'normal', physicalHitZone: 45, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '後脚',
      states: [
        { state: 'normal', physicalHitZone: 25, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '翼碗（白纏晶）',
      states: [
        { state: 'normal', physicalHitZone: 40, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '翼碗',
      states: [
        { state: 'normal', physicalHitZone: 80, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 20 },
        { state: 'wounded', physicalHitZone: 90, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
        { state: 'exposed', physicalHitZone: 100, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
      ],
    },
    {
      name: '翼碗2',
      states: [
        { state: 'normal', physicalHitZone: 85, fireHitZone: 20, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 30 },
        { state: 'wounded', physicalHitZone: 95, fireHitZone: 20, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 30 },
      ],
    },
    {
      name: '尻尾',
      states: [
        { state: 'normal', physicalHitZone: 35, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
  ],
};

export default ZoShia;
