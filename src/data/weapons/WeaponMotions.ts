import type { Motion } from '../../models/Motion';
import { TACHI_MOTIONS } from './TachiMotions';
import { GREATSWORD_MOTIONS } from './GreatswordMotions';

export const MOTIONS_BY_WEAPON_TYPE: Record<string, Motion[]> = {
  longsword: TACHI_MOTIONS,
  greatsword: GREATSWORD_MOTIONS,
};
