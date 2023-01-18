import { PieWeight } from 'src/helpers/make-pies';

export const getCheckedWeight = (weights: PieWeight[]): number =>
  weights.find(({ isChecked }) => isChecked)?.price ?? 0;
