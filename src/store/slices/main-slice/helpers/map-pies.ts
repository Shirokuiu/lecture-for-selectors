import { getCheckedWeight } from 'src/components/shared/pie-cart/helpers/get-checked-weight';
import { Pie, PieWeight } from 'src/helpers/make-pies';

export interface MappedPie extends Omit<Pie, 'weights'> {
  totalPrice: number;
  weight: MappedPieWeight;
}

export type MappedPieWeight = {
  items: PieWeight[];
  selectedPrice: number;
};

const getTotalPrice = (weights: PieWeight[]): number =>
  weights.find(({ isChecked }) => isChecked)?.price ?? 0;

export const mapPies = (pies: Pie[]): MappedPie[] =>
  pies.map((pie) => ({
    id: pie.id,
    count: pie.count,
    rate: pie.rate,
    img: pie.img,
    isLean: pie.isLean,
    isFavorite: pie.isFavorite,
    inStock: pie.inStock,
    filling: pie.filling,
    weight: {
      items: pie.weights,
      selectedPrice: getCheckedWeight(pie.weights),
    },
    totalPrice: getTotalPrice(pie.weights),
  }));
