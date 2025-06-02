import { attackBoost } from './AttackBoost';
import { adrenalineRush } from './AdrenalineRush';
import { chainCrit } from './ChainCrit';
import { challenger } from './Challenger';
import { counterstrike } from './Counterstrike';
import { criticalBoost } from './CriticalBoost';
import { elementalAbsorption } from './ElementalAbsorption';
import { latentPower } from './LatentPower';
import { masterfulStrike } from './MasterfulStrike';
import { maximumMight } from './MaximumMight';
import { mindEye } from './MindEye';
import { peakPerformance } from './PeakPerformance';
import { weaknessExploit } from './WeaknessExploit';
import { zenState } from './ZenState';
import { nushiSoul } from './NushiSoul';
import { kokusyokuIttai } from './KokusyokuIttai';
import { resentment } from './Resentment';
import { DragonAttack, FireAttack, IceAttack, ThunderAttack, WaterAttack } from './ElementalAttackSkills';
import Hien from './Hien';
import OffensiveGuard from './OffensiveGuard';
import { nurebaMon } from './NurebaMon';
import { criticalEye } from './CriticalEye';
import { coalescence } from './Coalescence';

export const skillsByCategory = {
  weapon: [attackBoost, criticalBoost, Hien, mindEye, FireAttack, WaterAttack, ThunderAttack, IceAttack, DragonAttack, nurebaMon, criticalEye],
  armor: [adrenalineRush, challenger, counterstrike, maximumMight, peakPerformance, latentPower, masterfulStrike, weaknessExploit, chainCrit, elementalAbsorption, zenState, resentment, OffensiveGuard, coalescence],
  group: [nushiSoul],
  series: [kokusyokuIttai],
};

export const skillCategoryLabels: Record<string, string> = {
  weapon: '武器スキル',
  armor: '防具スキル',
  group: 'グループスキル',
  series: 'シリーズスキル',
};
