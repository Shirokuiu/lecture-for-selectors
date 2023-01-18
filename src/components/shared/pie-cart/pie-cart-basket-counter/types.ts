import { Pie } from 'src/helpers/make-pies';

export type IPieCartBasketCounter = Pick<Pie, 'count'> & {
  disabled?: boolean;
};
