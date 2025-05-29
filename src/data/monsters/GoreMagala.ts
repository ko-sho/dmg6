import type { Monster } from '../../models/Monster';

const GoreMagala: Monster = {
  name: 'ゴア・マガラ',
  parts: [
    {
      name: '頭',
      states: [
        { state: 'normal', physicalHitZone: 65, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 },
        { state: 'wounded', physicalHitZone: 75, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '触角',
      states: [
        { state: 'normal', physicalHitZone: 75, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 25 },
        { state: 'wounded', physicalHitZone: 80, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 25 },
      ],
    },
    {
      name: '口',
      states: [
        { state: 'exposed', physicalHitZone: 75, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '首',
      states: [
        { state: 'normal', physicalHitZone: 45, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', physicalHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '胴体',
      states: [
        { state: 'normal', physicalHitZone: 25, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', physicalHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '翼',
      states: [
        { state: 'normal', physicalHitZone: 26, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', physicalHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '翼脚',
      states: [
        { state: 'normal', physicalHitZone: 27, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', physicalHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '翼脚（変化時）',
      states: [
        { state: 'normal', physicalHitZone: 60, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', physicalHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '前脚',
      states: [
        { state: 'normal', physicalHitZone: 42, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', physicalHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '後脚',
      states: [
        { state: 'normal', physicalHitZone: 38, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', physicalHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '尻尾',
      states: [
        { state: 'normal', physicalHitZone: 38, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', physicalHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
  ],
};

export default GoreMagala;
