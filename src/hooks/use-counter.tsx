import { useState } from 'react';

const MIN_COUNT = 1;
const COUNT_STEP = 1;

export type IUseCounter = {
  count: number;
  handleMinus: () => void;
  handlePlus: () => void;
};

function useCounter(startCount: number): IUseCounter {
  const [count, setCount] = useState<number>(startCount);

  const handleMinus = () => {
    if (count !== MIN_COUNT) {
      setCount((prevCount) => prevCount - COUNT_STEP);
    }
  };

  const handlePlus = () => {
    setCount((prevCount) => prevCount + COUNT_STEP);
  };

  return {
    count,
    handleMinus,
    handlePlus,
  };
}

export default useCounter;
