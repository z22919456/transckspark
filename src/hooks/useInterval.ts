import { useRef } from 'react';

const useInterval = (callback: Function, time: number) => {
  const interval = useRef<number>()
  const start = () => {
    stop();
    interval.current = setInterval(callback, time)
  }
  const stop = () => {
    clearInterval(interval.current)
  }

  return [start, stop]
}

export default useInterval