import { PieFilling } from 'src/helpers/make-pies';

const FillingMap = {
  [PieFilling.Cabbage]: 'капустой',
  [PieFilling.Potato]: 'картошкой',
  [PieFilling.Meat]: 'мясом',
  [PieFilling.Cheese]: 'сыром',
  [PieFilling.Mushrooms]: 'грибами',
  [PieFilling.Apple]: 'яблоком',
  [PieFilling.Piper]: 'перцем',
};

export const getFillingTitle = (pieFilling: PieFilling[]) =>
  pieFilling
    .map((filling) => FillingMap[filling])
    .join(' и ')
    .toUpperCase();
