import type { Monster } from '../../models/Monster';

const GoreMagala: Monster = {
  name: 'ゴア・マガラ',
  parts: [
    {
      name: '頭',
      states: [
        { state: 'normal', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 },
        { state: 'wounded', slashHitZone: 75, bluntHitZone: 75, shotHitZone: 75, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '触角',
      states: [
        { state: 'normal', slashHitZone: 75, bluntHitZone: 75, shotHitZone: 75, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 25 },
        { state: 'wounded', slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 25 },
      ],
    },
    {
      name: '口',
      states: [
        { state: 'exposed', slashHitZone: 75, bluntHitZone: 75, shotHitZone: 75, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 },
      ],
    },
    {
      name: '首',
      states: [
        { state: 'normal', slashHitZone: 45, bluntHitZone: 45, shotHitZone: 45, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '胴体',
      states: [
        { state: 'normal', slashHitZone: 25, bluntHitZone: 25, shotHitZone: 25, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '翼',
      states: [
        { state: 'normal', slashHitZone: 26, bluntHitZone: 26, shotHitZone: 26, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '翼脚',
      states: [
        { state: 'normal', slashHitZone: 27, bluntHitZone: 27, shotHitZone: 27, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '翼脚（変化時）',
      states: [
        { state: 'normal', slashHitZone: 60, bluntHitZone: 60, shotHitZone: 60, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '前脚',
      states: [
        { state: 'normal', slashHitZone: 42, bluntHitZone: 42, shotHitZone: 42, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '後脚',
      states: [
        { state: 'normal', slashHitZone: 38, bluntHitZone: 38, shotHitZone: 38, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
    {
      name: '尻尾',
      states: [
        { state: 'normal', slashHitZone: 38, bluntHitZone: 38, shotHitZone: 38, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: 'wounded', slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
      ],
    },
  ],
};

export default GoreMagala;
