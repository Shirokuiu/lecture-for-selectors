import { useEffect, useState } from 'react';

const DEFAULT_START_COUNT = 1;
const MIN_COUNT = 1;
const STEP = 1;

export type IUseCounter = {
  count: number;
  handleMinus: (counterCb?: IUseCounterCb) => void;
  handlePlus: (counterCb?: IUseCounterCb) => void;
};

export type IUseCounterCb = (count: number) => void;

function useCounter(startCount?: number): IUseCounter {
  const [count, setCount] = useState<number>(DEFAULT_START_COUNT);

  useEffect(() => {
    setCount(startCount ?? DEFAULT_START_COUNT);
  }, [startCount]);

  const handleMinus = (cb: IUseCounterCb = () => undefined) => {
    if (count !== MIN_COUNT) {
      setCount((prevCount) => {
        const calculatedCount = prevCount - STEP;

        cb(calculatedCount);

        return calculatedCount;
      });
    }
  };

  const handlePlus = (cb: IUseCounterCb = () => undefined) => {
    setCount((prevCount) => {
      const calculatedCount = prevCount + STEP;

      cb(calculatedCount);

      return calculatedCount;
    });
  };

  return {
    count,
    handleMinus,
    handlePlus,
  };
}

export default useCounter;
