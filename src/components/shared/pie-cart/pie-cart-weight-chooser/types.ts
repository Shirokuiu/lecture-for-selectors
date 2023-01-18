import { Pie } from 'src/helpers/make-pies';

export type IPieCartWeightChooser = Pick<Pie, 'weights'> & {
  disabled?: boolean;
};
