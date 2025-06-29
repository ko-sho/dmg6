import type { Motion } from '../../models/Motion';

// 大剣のモーション値リスト（2025年表準拠）
export const GREATSWORD_MOTIONS: Motion[] = [
  { source: 'Charged Slash Lv0', name: 'Charged Slash Lv0', motionValue: 78, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Charged Slash Lv1', name: 'Charged Slash Lv1', motionValue: 101, elementMultiplier: 1.1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Charged Slash Lv2', name: 'Charged Slash Lv2', motionValue: 129, elementMultiplier: 1.2, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Charged Slash Lv3', name: 'Charged Slash Lv3', motionValue: 160, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Wide Slash', name: 'Wide Slash', motionValue: 42, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Offset Rising Slash Lv0', name: 'Offset Rising Slash Lv0', motionValue: 38, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Offset Rising Slash Lv1', name: 'Offset Rising Slash Lv1', motionValue: 94, elementMultiplier: 1.1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Offset Rising Slash Lv2', name: 'Offset Rising Slash Lv2', motionValue: 121, elementMultiplier: 1.2, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Offset Rising Slash Lv3', name: 'Offset Rising Slash Lv3', motionValue: 151, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Follow-up Cross Slash 1 Lv1', name: 'Follow-up Cross Slash 1 Lv1', motionValue: 44, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Follow-up Cross Slash 2 Lv1', name: 'Follow-up Cross Slash 2 Lv1', motionValue: 180, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Follow-up Cross Slash 1 Lv2', name: 'Follow-up Cross Slash 1 Lv2', motionValue: 49, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Follow-up Cross Slash 2 Lv2', name: 'Follow-up Cross Slash 2 Lv2', motionValue: 200, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Follow-up Cross Slash 1 Lv3', name: 'Follow-up Cross Slash 1 Lv3', motionValue: 58, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Follow-up Cross Slash 2 Lv3', name: 'Follow-up Cross Slash 2 Lv3', motionValue: 230, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Kick', name: 'Kick', motionValue: 5, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'blunt' },
  { source: 'Side Blow', name: 'Side Blow', motionValue: 16, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'blunt' },
  { source: 'Strong Charged Slash Lv1', name: 'Strong Charged Slash Lv1', motionValue: 108, elementMultiplier: 1.2, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Strong Charged Slash Lv2', name: 'Strong Charged Slash Lv2', motionValue: 140, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Strong Charged Slash Lv3', name: 'Strong Charged Slash Lv3', motionValue: 176, elementMultiplier: 1.4, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Strong Wide Slash Lv1', name: 'Strong Wide Slash Lv1', motionValue: 87, elementMultiplier: 1.5, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Strong Wide Slash Lv2', name: 'Strong Wide Slash Lv2', motionValue: 105, elementMultiplier: 1.7, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Strong Wide Slash Lv3', name: 'Strong Wide Slash Lv3', motionValue: 130, elementMultiplier: 2, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Tackle Lv0', name: 'Tackle Lv0', motionValue: 23, elementMultiplier: 0, sharpnessModifier: 1, hitCount: 1, attackType: 'blunt' },
  { source: 'Tackle Lv1', name: 'Tackle Lv1', motionValue: 26, elementMultiplier: 0, sharpnessModifier: 1, hitCount: 1, attackType: 'blunt' },
  { source: 'Tackle Lv2', name: 'Tackle Lv2', motionValue: 35, elementMultiplier: 0, sharpnessModifier: 1, hitCount: 1, attackType: 'blunt' },
  { source: 'Tackle Lv3', name: 'Tackle Lv3', motionValue: 48, elementMultiplier: 0, sharpnessModifier: 1.2, hitCount: 1, attackType: 'blunt' },
  { source: 'Leaping Wide Slash Lv0', name: 'Leaping Wide Slash Lv0', motionValue: 88, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Leaping Wide Slash Lv1', name: 'Leaping Wide Slash Lv1', motionValue: 106, elementMultiplier: 2, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Leaping Wide Slash Lv2', name: 'Leaping Wide Slash Lv2', motionValue: 128, elementMultiplier: 2.5, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Leaping Wide Slash Lv3', name: 'Leaping Wide Slash Lv3', motionValue: 159, elementMultiplier: 3.1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'True Charged Slash 1 Lv1', name: 'True Charged Slash 1 Lv1', motionValue: 12, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'True Charged Slash 1 Lv2', name: 'True Charged Slash 1 Lv2', motionValue: 14, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'True Charged Slash 1 Lv3', name: 'True Charged Slash 1 Lv3', motionValue: 16, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'True Charged Slash 2 Lv1', name: 'True Charged Slash 2 Lv1', motionValue: 102, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'True Charged Slash 2 Lv2', name: 'True Charged Slash 2 Lv2', motionValue: 149, elementMultiplier: 1.4, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'True Charged Slash 2 Lv3', name: 'True Charged Slash 2 Lv3', motionValue: 190, elementMultiplier: 1.5, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Power True Charged Slash 2 Lv1', name: 'Power True Charged Slash 2 Lv1', motionValue: 121, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Power True Charged Slash 2 Lv2', name: 'Power True Charged Slash 2 Lv2', motionValue: 181, elementMultiplier: 1.4, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Power True Charged Slash 2 Lv3', name: 'Power True Charged Slash 2 Lv3', motionValue: 241, elementMultiplier: 1.5, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Jumping Charged Slash Lv0', name: 'Jumping Charged Slash Lv0', motionValue: 48, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Jumping Charged Slash Lv1', name: 'Jumping Charged Slash Lv1', motionValue: 58, elementMultiplier: 1.1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Jumping Charged Slash Lv2', name: 'Jumping Charged Slash Lv2', motionValue: 69, elementMultiplier: 1.2, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Jumping Charged Slash Lv3', name: 'Jumping Charged Slash Lv3', motionValue: 87, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Charged Rising Slash Lv0', name: 'Charged Rising Slash Lv0', motionValue: 48, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Charged Rising Slash Lv1', name: 'Charged Rising Slash Lv1', motionValue: 48, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Charged Rising Slash Lv2', name: 'Charged Rising Slash Lv2', motionValue: 72, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Charged Rising Slash Lv3', name: 'Charged Rising Slash Lv3', motionValue: 98, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Plunging Thrust Lv0', name: 'Plunging Thrust Lv0', motionValue: 36, elementMultiplier: 0.4, sharpnessModifier: 0.2, hitCount: 1, attackType: 'slash' },
  { source: 'Plunging Thrust Lv1', name: 'Plunging Thrust Lv1', motionValue: 42, elementMultiplier: 0.4, sharpnessModifier: 0.2, hitCount: 1, attackType: 'slash' },
  { source: 'Plunging Thrust Lv2', name: 'Plunging Thrust Lv2', motionValue: 50, elementMultiplier: 0.4, sharpnessModifier: 0.2, hitCount: 1, attackType: 'slash' },
  { source: 'Plunging Thrust Lv3', name: 'Plunging Thrust Lv3', motionValue: 58, elementMultiplier: 0.4, sharpnessModifier: 0.2, hitCount: 1, attackType: 'slash' },
  { source: 'Scaling Drop Slash 1', name: 'Scaling Drop Slash 1', motionValue: 20, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Scaling Drop Slash 2', name: 'Scaling Drop Slash 2', motionValue: 45, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Seikret Attack I', name: 'Seikret Attack I', motionValue: 15, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Seikret Attack II', name: 'Seikret Attack II', motionValue: 10, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Dismount Attack 1', name: 'Dismount Attack 1', motionValue: 20, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Dismount Attack 2', name: 'Dismount Attack 2', motionValue: 50, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv0', name: 'Focus Strike: Perforate Lv0', motionValue: 15, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv1', name: 'Focus Strike: Perforate Lv1', motionValue: 20, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv2', name: 'Focus Strike: Perforate Lv2', motionValue: 26, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv3', name: 'Focus Strike: Perforate Lv3', motionValue: 33, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv0 Extra Hit', name: 'Focus Strike: Perforate Lv0 Extra Hit', motionValue: 14, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv1 Extra Hit', name: 'Focus Strike: Perforate Lv1 Extra Hit', motionValue: 16, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv2 Extra Hit', name: 'Focus Strike: Perforate Lv2 Extra Hit', motionValue: 18, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv3 Extra Hit', name: 'Focus Strike: Perforate Lv3 Extra Hit', motionValue: 24, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv0 Multihit', name: 'Focus Strike: Perforate Lv0 Multihit', motionValue: 10, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv1 Multihit', name: 'Focus Strike: Perforate Lv1 Multihit', motionValue: 11, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv2 Multihit', name: 'Focus Strike: Perforate Lv2 Multihit', motionValue: 12, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv3 Multihit', name: 'Focus Strike: Perforate Lv3 Multihit', motionValue: 13, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv0 Finisher 1', name: 'Focus Strike: Perforate Lv0 Finisher 1', motionValue: 15, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv1 Finisher 1', name: 'Focus Strike: Perforate Lv1 Finisher 1', motionValue: 20, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv2 Finisher 1', name: 'Focus Strike: Perforate Lv2 Finisher 1', motionValue: 22, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv3 Finisher 1', name: 'Focus Strike: Perforate Lv3 Finisher 1', motionValue: 24, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv0 Finisher 2', name: 'Focus Strike: Perforate Lv0 Finisher 2', motionValue: 6, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv1 Finisher 2', name: 'Focus Strike: Perforate Lv1 Finisher 2', motionValue: 6, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv2 Finisher 2', name: 'Focus Strike: Perforate Lv2 Finisher 2', motionValue: 6, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv3 Finisher 2', name: 'Focus Strike: Perforate Lv3 Finisher 2', motionValue: 6, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv0 Finisher 3', name: 'Focus Strike: Perforate Lv0 Finisher 3', motionValue: 2, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv1 Finisher 3', name: 'Focus Strike: Perforate Lv1 Finisher 3', motionValue: 2, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv2 Finisher 3', name: 'Focus Strike: Perforate Lv2 Finisher 3', motionValue: 2, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Focus Strike: Perforate Lv3 Finisher 3', name: 'Focus Strike: Perforate Lv3 Finisher 3', motionValue: 2, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Aerial Focus Strike Lv0', name: 'Aerial Focus Strike Lv0', motionValue: 15, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: 'slash' },
  { source: 'Aerial Focus Strike Lv1', name: 'Aerial Focus Strike Lv1', motionValue: 20, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: 'slash' },
  { source: 'Aerial Focus Strike Lv2', name: 'Aerial Focus Strike Lv2', motionValue: 26, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: 'slash' },
  { source: 'Aerial Focus Strike Lv3', name: 'Aerial Focus Strike Lv3', motionValue: 33, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: 'slash' },
  { source: 'Aerial Focus Strike Extra Hit Lv0', name: 'Aerial Focus Strike Extra Hit Lv0', motionValue: 14, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Aerial Focus Strike Extra Hit Lv1', name: 'Aerial Focus Strike Extra Hit Lv1', motionValue: 16, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Aerial Focus Strike Extra Hit Lv2', name: 'Aerial Focus Strike Extra Hit Lv2', motionValue: 18, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Aerial Focus Strike Extra Hit Lv3', name: 'Aerial Focus Strike Extra Hit Lv3', motionValue: 24, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: 'slash' },
  { source: 'Clash Finisher', name: 'Clash Finisher', motionValue: 90, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash' },
  { source: 'Mount Attack', name: 'Mount Attack', motionValue: 90, elementMultiplier: 1, sharpnessModifier: 0.1, hitCount: 1, attackType: 'slash' },
  { source: 'Mount Finisher 1', name: 'Mount Finisher 1', motionValue: 120, elementMultiplier: 1, sharpnessModifier: 0.1, hitCount: 1, attackType: 'slash' },
  { source: 'Mount Finisher Multihit', name: 'Mount Finisher Multihit', motionValue: 10, elementMultiplier: 1, sharpnessModifier: 0.1, hitCount: 1, attackType: 'slash' },
  { source: 'Mount Finisher 2', name: 'Mount Finisher 2', motionValue: 60, elementMultiplier: 1, sharpnessModifier: 0.1, hitCount: 1, attackType: 'slash' },
];
