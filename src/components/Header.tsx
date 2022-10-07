import classnames from 'classnames';
import TitleSvg from 'components/assets/title.svg';
import dayjs from 'dayjs';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {
  className?: string
};

function Header({ className }: Props) {
  const now = dayjs();
  const to = dayjs('2022-12-31');
  const [duration, setDuration] = useState({ day: 0, time: '00:00:00' });

  useEffect(() => {
    const timer = setInterval(() => {
      const day = to.diff(now, 'd');
      const time = dayjs(to.diff(now)).format('HH:MM:ss');
      setDuration({ day, time });
    }, 1000);
    return () => clearInterval(timer);
  }, [now, to]);

  return (
    <div className={classnames('relative md:z-10 -z-10  w-full h-20 px-5 bg-gradient-to-b from-primary to-white transition-all duration-200 -mb-20 md:mb-0', className)}>
      <div className="items-center justify-end hidden w-full h-full md:flex">
        <TitleSvg className="absolute -translate-y-1/2 top-1/2 left-5" />
        <div className="mb-1 text-right text-black/50 lg:flex lg:space-x-5">
          <p>{duration.day} Days {duration.time}</p>
          <Link href="/">
            <a>
              Register Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
