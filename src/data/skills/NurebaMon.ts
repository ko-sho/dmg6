import { SkillData } from '../../models/Skill';

export const nurebaMon = new SkillData(
  'weapon',
  '濡れ刃紋',
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalRateBonus: 7,
          minHitZone: 0,
          maxHitZone: 100,
          description: '泡状態の時、会心率+7%'
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          criticalRateBonus: 14,
          minHitZone: 0,
          maxHitZone: 100,
          description: '泡状態の時、会心率+14%'
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          criticalRateBonus: 21,
          minHitZone: 0,
          maxHitZone: 100,
          description: '泡状態の時、会心率+21%'
        }
      ]
    }
  ]
);
