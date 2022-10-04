import { useRef } from 'react';

const useTimeout = (callback: () => void, time: number) => {
  const interval = useRef<NodeJS.Timer>();

  const stop = () => {
    clearTimeout(interval.current);
  };

  const start = () => {
    stop();
    interval.current = setTimeout(callback, time);
  };

  return [start, stop];
};

export default useTimeout;
