import { PieFilling } from 'src/helpers/make-pies';

const LabelMap = {
  [PieFilling.Potato]: 'картошка',
  [PieFilling.Cabbage]: 'капуста',
  [PieFilling.Piper]: 'перец',
  [PieFilling.Apple]: 'яблоко',
  [PieFilling.Cheese]: 'сыр',
  [PieFilling.Meat]: 'мясо',
  [PieFilling.Mushrooms]: 'грибы',
};

export const getLabelForFillingFilter = (fillingItem: PieFilling): string => LabelMap[fillingItem];
