import type { Monster } from '../../models/Monster';

const NekoTrainingTarupuncher: Monster = {
  name: '猫式訓練タルパンチャー',
  parts: [
    {
      name: 'やわらかい',
      states: [
        {
          state: 'normal',
          slashHitZone: 80,
          bluntHitZone: 80,
          shotHitZone: 80,
          fireHitZone: 30,
          waterHitZone: 30,
          thunderHitZone: 30,
          iceHitZone: 30,
          dragonHitZone: 30,
        },
      ],
    },
    {
      name: 'かたい',
      states: [
        {
          state: 'normal',
          slashHitZone: 40,
          bluntHitZone: 40,
          shotHitZone: 40,
          fireHitZone: 30,
          waterHitZone: 30,
          thunderHitZone: 30,
          iceHitZone: 30,
          dragonHitZone: 30,
        },
      ],
    },
    {
      name: '傷',
      states: [
        {
          state: 'wounded',
          slashHitZone: 100,
          bluntHitZone: 100,
          shotHitZone: 100,
          fireHitZone: 30,
          waterHitZone: 30,
          thunderHitZone: 30,
          iceHitZone: 30,
          dragonHitZone: 30,
        },
      ],
    },
  ],
};

export default NekoTrainingTarupuncher;
