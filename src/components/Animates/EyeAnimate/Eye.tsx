import { animated, useSpring } from '@react-spring/web';
import useInterval from 'hooks/useInterval';
import useTimeout from 'hooks/useTimeout';
import React, { Component, ReactElement, useEffect, useRef, useState } from 'react';

type Props = {
  ball: () => JSX.Element
};

const CONFIG = {
  mass: 2,
  tension: 500,
  friction: 26,
  clamp: false,
  precision: 0.01,
  velocity: 0,
  // easing: (t: number) => t
};

export default function Eye({ ball }: Props) {
  // eyeball component
  const Ball = ball;

  const eyeRef = useRef<SVGSVGElement>(null);
  const ballRef = useRef<SVGSVGElement>(null);
  const [move, setMove] = useState([0, 0]);

  // auto animate when mouse unmoved
  const [startAutoAnimate, stopAutoAnimate] = useInterval(() => {
    if (!eyeRef.current) return;

    const {
      width, height, top, left,
    } = eyeRef.current.getBoundingClientRect();
    setMove([((Math.random() - 0.5) / 2) * width, ((Math.random() - 0.5) / 2) * height]);
  }, Math.random() * 2500 + 500);

  useEffect(() => startAutoAnimate(), []);

  // count down 5 sec and start auto animate
  const [countDown, resetCountDown] = useTimeout(startAutoAnimate, 3000);

  // animate tick
  const mouseEvent = (e: MouseEvent) => {
    // stop auto animate and count Down
    resetCountDown();
    stopAutoAnimate();

    if (!ballRef.current || !eyeRef.current) return;

    const {
      width, height, top, left,
    } = eyeRef.current.getBoundingClientRect();
    //  get eye center point on screen
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // get move x and y
    const x = ((e.clientX - centerX) / window.innerWidth / 2) * width;
    const y = ((e.clientY - centerY) / window.innerHeight / 2) * height;
    setMove([x, y]);

    // count down 5 sec to start auto animate
    countDown();
  };

  // Mouse Move Event Listener
  useEffect(() => {
    document.addEventListener('mousemove', mouseEvent);
    return () => {
      document.removeEventListener('mousemove', mouseEvent);
    };
  }, [eyeRef, ballRef]);

  // Animate Props
  const props = useSpring({ move, config: CONFIG });

  return (
    <div className="relative w-2/3 md:w-1/2 aspect-[2.84]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="416"
        height="147"
        viewBox="0 0 416 147"
        fill="none"
        ref={eyeRef}
        className="absolute w-full h-full"
      >
        <path
          d="M415.5 73.4602C359.211 27.5675 286.794 0 207.75 0C128.706 0 56.2889 27.5675 0 73.4602C56.2889 119.353 128.706 146.92 207.75 146.92C286.794 146.92 359.211 119.273 415.5 73.4602Z"
          fill="#FBDACC"
        />
        <mask
          id="mask0_271_190"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="416"
          height="147"
        >
          <path
            d="M415.5 73.4602C359.211 27.5675 286.794 0 207.75 0C128.706 0 56.2889 27.5675 0 73.4602C56.2889 119.353 128.706  146.92 207.75 146.92C286.794 146.92 359.211 119.273 415.5 73.4602Z"
            fill="#000000"
          />
        </mask>
        <g mask="url(#mask0_271_190)">
          <animated.g
            style={{ transform: props.move.to((x: number, y: number) => `translate(${x}px, ${y}px)`) }}
            ref={ballRef}
          >
            <Ball />
          </animated.g>
        </g>
      </svg>
    </div>
  );
}
