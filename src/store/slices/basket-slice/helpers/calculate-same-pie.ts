import { calculateTotalPrice } from 'src/helpers/calculate-total-price';
import { MappedPie } from 'src/store/slices/main-slice/helpers/map-pies';

export const calculateSamePie = (pies: MappedPie[], pie: MappedPie): MappedPie[] =>
  pies.map((pieItem) => {
    if (pieItem.id === pie.id) {
      const count = pieItem.count + pie.count;
      const totalPrice = calculateTotalPrice(count, pie.weight.selectedPrice);

      return {
        ...pieItem,
        count,
        totalPrice,
      };
    }

    return pieItem;
  });
