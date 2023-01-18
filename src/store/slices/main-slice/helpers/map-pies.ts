import { Pie, PieWeight } from 'src/helpers/make-pies';

export interface MappedPie extends Pie {
  totalPrice: number;
}

const getTotalPrice = (weights: PieWeight[]): number =>
  weights.find(({ isChecked }) => isChecked)?.price ?? 0;

export const mapPies = (pies: Pie[]): MappedPie[] =>
  pies.map((pie) => ({
    ...pie,
    totalPrice: getTotalPrice(pie.weights),
  }));
