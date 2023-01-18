export enum PieFilling {
  Meat = 'meat',
  Cabbage = 'cabbage',
  Potato = 'potato',
  Apple = 'apple',
  Mushrooms = 'mushrooms',
  Cheese = 'cheese',
  Piper = 'piper',
}

export enum MeasureOfWeight {
  Gram = 'gram',
}

export type PieWeight = {
  id: number;
  count: number;
  measureOfWeight: MeasureOfWeight;
  price: number;
  isChecked: boolean;
};

export type Pie = {
  id: number;
  count: number;
  rate: number;
  img: string;
  isLean: boolean;
  isFavorite: boolean;
  inStock: boolean;
  filling: PieFilling[];
  weights: PieWeight[];
};

const makeWeights = (): PieWeight[] => [
  {
    id: 1,
    count: 1000,
    measureOfWeight: MeasureOfWeight.Gram,
    price: 670,
    isChecked: true,
  },
  {
    id: 2,
    count: 1200,
    measureOfWeight: MeasureOfWeight.Gram,
    price: 870,
    isChecked: false,
  },
  {
    id: 3,
    count: 1400,
    measureOfWeight: MeasureOfWeight.Gram,
    price: 940,
    isChecked: false,
  },
];

export const makePies = (): Pie[] => [
  {
    id: 1,
    count: 1,
    rate: 4,
    img: '/img/cabbage.jpg',
    isLean: true,
    isFavorite: false,
    inStock: true,
    filling: [PieFilling.Cabbage],
    weights: makeWeights(),
  },
  {
    id: 2,
    count: 1,
    rate: 5,
    img: '/img/potato.jpg',
    isLean: true,
    isFavorite: false,
    inStock: true,
    filling: [PieFilling.Potato],
    weights: makeWeights(),
  },
  {
    id: 3,
    count: 1,
    rate: 5,
    img: '/img/apple.jpg',
    isLean: true,
    isFavorite: false,
    inStock: true,
    filling: [PieFilling.Apple],
    weights: makeWeights(),
  },
  {
    id: 4,
    count: 1,
    rate: 3,
    img: '/img/mushrooms.jpg',
    isLean: true,
    isFavorite: false,
    inStock: false,
    filling: [PieFilling.Mushrooms],
    weights: makeWeights(),
  },
  {
    id: 5,
    count: 1,
    rate: 3.5,
    img: '/img/cabbage-mushrooms.jpg',
    isLean: true,
    isFavorite: false,
    inStock: false,
    filling: [PieFilling.Cabbage, PieFilling.Mushrooms],
    weights: makeWeights(),
  },
  {
    id: 6,
    count: 1,
    rate: 5,
    img: '/img/meat.jpg',
    isLean: false,
    isFavorite: false,
    inStock: true,
    filling: [PieFilling.Meat],
    weights: makeWeights(),
  },
  {
    id: 7,
    count: 1,
    rate: 5,
    img: '/img/meat-cabbage.jpg',
    isLean: false,
    isFavorite: false,
    inStock: true,
    filling: [PieFilling.Meat, PieFilling.Cabbage],
    weights: makeWeights(),
  },
  {
    id: 8,
    count: 1,
    rate: 5,
    img: '/img/meat-piper.jpg',
    isLean: false,
    isFavorite: false,
    inStock: true,
    filling: [PieFilling.Meat, PieFilling.Piper],
    weights: makeWeights(),
  },
  {
    id: 9,
    count: 1,
    rate: 4.5,
    img: '/img/meat-potato.jpg',
    isLean: false,
    isFavorite: false,
    inStock: true,
    filling: [PieFilling.Meat, PieFilling.Potato],
    weights: makeWeights(),
  },
  {
    id: 10,
    count: 1,
    rate: 4,
    img: '/img/cheese.jpg',
    isLean: true,
    isFavorite: false,
    inStock: true,
    filling: [PieFilling.Cheese],
    weights: makeWeights(),
  },
];
