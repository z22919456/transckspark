import { useRef } from 'react';

const useTimeout = (callback: Function, time: number) => {
  const interval = useRef<number>()
  const start = () => {
    stop();
    interval.current = setTimeout(callback, time)
  }
  const stop = () => {
    clearTimeout(interval.current)
  }

  return [start, stop]
}

export default useTimeout