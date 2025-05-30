export type SharpnessColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'white';

export interface Sharpness {
  color: SharpnessColor;
  modifier: number; // 物理補正
  elementModifier: number; // 属性補正
}

export const SHARPNESS_LEVELS: Sharpness[] = [
  { color: 'red', modifier: 0.5, elementModifier: 0.25 },
  { color: 'orange', modifier: 0.75, elementModifier: 0.5 },
  { color: 'yellow', modifier: 1.0, elementModifier: 0.75 },
  { color: 'green', modifier: 1.05, elementModifier: 1.0 },
  { color: 'blue', modifier: 1.2, elementModifier: 1.063 },
  { color: 'white', modifier: 1.32, elementModifier: 1.15 },
];
