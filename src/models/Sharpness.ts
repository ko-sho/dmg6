export type SharpnessColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'white';

export interface Sharpness {
  color: SharpnessColor;
  modifier: number;
}

export const SHARPNESS_LEVELS: Sharpness[] = [
  { color: 'red', modifier: 0.5 },
  { color: 'orange', modifier: 0.75 },
  { color: 'yellow', modifier: 1.0 },
  { color: 'green', modifier: 1.05 },
  { color: 'blue', modifier: 1.2 },
  { color: 'white', modifier: 1.32 },
];
