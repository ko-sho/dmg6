import { Monster } from '../../models/Monster';

export const redau = new Monster('Redau', [
  {
    name: '頭',
    state: 'normal',
    physicalHitZone: 60,
    elementalHitZones: {
      fire: 5,
      water: 15,
      ice: 20,
      thunder: 0,
      dragon: 5,
    },
  },
  {
    name: '頭',
    state: 'wounded',
    physicalHitZone: 70,
    elementalHitZones: {
      fire: 5,
      water: 20,
      ice: 25,
      thunder: 0,
      dragon: 5,
    },
  },
  {
    name: '頭',
    state: 'exposed',
    physicalHitZone: 80,
    elementalHitZones: {
      fire: 5,
      water: 20,
      ice: 25,
      thunder: 0,
      dragon: 5,
    },
  },
  {
    name: '胴体',
    state: 'normal',
    physicalHitZone: 30,
    elementalHitZones: {
      fire: 5,
      water: 5,
      ice: 5,
      thunder: 0,
      dragon: 5,
    },
  },
  {
    name: '翼',
    state: 'normal',
    physicalHitZone: 45,
    elementalHitZones: {
      fire: 5,
      water: 10,
      ice: 15,
      thunder: 0,
      dragon: 5,
    },
  },
  {
    name: '脚',
    state: 'normal',
    physicalHitZone: 37,
    elementalHitZones: {
      fire: 5,
      water: 5,
      ice: 5,
      thunder: 0,
      dragon: 5,
    },
  },
  {
    name: '尻尾',
    state: 'normal',
    physicalHitZone: 45,
    elementalHitZones: {
      fire: 5,
      water: 5,
      ice: 10,
      thunder: 0,
      dragon: 5,
    },
  },
  {
    name: 'その他傷口',
    state: 'wounded',
    physicalHitZone: 65,
    elementalHitZones: {
      fire: 5,
      water: 10,
      ice: 15,
      thunder: 0,
      dragon: 5,
    },
  },
]);
