import { SkillData } from '../../models/Skill';

// 武器種ごとの属性倍率テーブル
const COALESCENCE_ELEMENT_MULTIPLIERS: Record<string, [number, number, number]> = {
  greatsword: [1.1, 1.2, 1.3], // 大剣
  longsword: [1.05, 1.1, 1.15], // 太刀
  sword: [1.05, 1.1, 1.15], // 片手剣
  dualblades: [1.05, 1.1, 1.15], // 双剣
  hammer: [1.1, 1.2, 1.3], // ハンマー
  horn: [1.1, 1.2, 1.3], // 狩猟笛
  lance: [1.05, 1.1, 1.15], // ランス
  gunlance: [1.1, 1.2, 1.3], // ガンランス
  switchaxe: [1.1, 1.2, 1.3], // スラアク
  chargeblade: [1.1, 1.2, 1.3], // チャアク
  insectglaive: [1.05, 1.1, 1.15], // 操虫棍
  lightbowgun: [1.05, 1.1, 1.15], // ライト
  heavybowgun: [1.05, 1.1, 1.15], // ヘビィ
  bow: [1.05, 1.1, 1.15], // 弓
};

export const coalescence = new SkillData(
  'armor',
  '災禍転福',
  [1, 2, 3].map((level) => ({
    level,
    skillBonuses: Object.entries(COALESCENCE_ELEMENT_MULTIPLIERS).map(([weaponType, arr]) => ({
      weaponType,
      elementModifier: arr[level - 1],
      minHitZone: 0,
      maxHitZone: 100,
      description: `発動中、属性ダメージ・状態異常蓄積値が${level === 1 ? 'わずかに' : level === 2 ? '上昇' : '大きく上昇'}（${weaponType}：属性${arr[level-1]}倍）`,
    })),
  }))
);
