import { SkillData } from '../../models/Skill';

export const criticalEye = new SkillData(
  'weapon',
  '見切り',
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalRateBonus: 4,
          minHitZone: 0,
          maxHitZone: 100,
          description: '会心率+4%'
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          criticalRateBonus: 8,
          minHitZone: 0,
          maxHitZone: 100,
          description: '会心率+8%'
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          criticalRateBonus: 12,
          minHitZone: 0,
          maxHitZone: 100,
          description: '会心率+12%'
        }
      ]
    },
    {
      level: 4,
      skillBonuses: [
        {
          criticalRateBonus: 16,
          minHitZone: 0,
          maxHitZone: 100,
          description: '会心率+16%'
        }
      ]
    },
    {
      level: 5,
      skillBonuses: [
        {
          criticalRateBonus: 20,
          minHitZone: 0,
          maxHitZone: 100,
          description: '会心率+20%'
        }
      ]
    }
  ]
);
