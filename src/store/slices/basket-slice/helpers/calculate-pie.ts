import { calculateTotalPrice } from 'src/helpers/calculate-total-price';
import { calculateSamePie } from 'src/store/slices/basket-slice/helpers/calculate-same-pie';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

export const calculatePie = (pies: MappedPie[], pie: MappedPie): MappedPie[] => {
  const hasSameId = pies.some(({ id }) => id === pie.id);

  if (hasSameId) {
    return calculateSamePie(pies, pie);
  }

  return [
    ...pies,
    {
      ...pie,
      totalPrice: calculateTotalPrice(pie.count, pie.weight.selectedPrice),
    },
  ];
};
