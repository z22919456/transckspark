import { useRef } from 'react';

const useInterval = (callback: ()=> void, time: number) => {
  const interval = useRef<NodeJS.Timer>();

  const stop = () => {
    clearInterval(interval.current);
  };

  const start = () => {
    stop();
    interval.current = setInterval(callback, time);
  };

  return [start, stop];
};

export default useInterval;
