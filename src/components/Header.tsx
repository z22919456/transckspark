import classnames from 'classnames';
import TitleSvg from 'components/assets/title.svg';
import dayjs from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';

type Props = {
  className?: string
};

const FIRST_TIME = '2022-12-01T12:00:00.000+08:00';
const SECOND_TIME = '2023-02-15T12:00:00.000+08:00';
const THIRD_TIME = '2023-03-10T12:00:00.000+08:00';
const FOUR_TIME = '2023-08-25T12:00:00.000+08:00';

const TIME_POINTS = [FIRST_TIME, SECOND_TIME, THIRD_TIME, FOUR_TIME];

const TITLE = ['初審入圍名單公布倒數', '決選交件截止日倒數', '決選優勝者公布', '成果展覽開幕日'];

function Header({ className }: Props) {
  const now = dayjs();
  const stage = useMemo(() => {
    if (dayjs().isBefore(dayjs(FIRST_TIME))) return 0;
    if (dayjs().isBefore(dayjs(SECOND_TIME))) return 1;
    if (dayjs().isBefore(dayjs(THIRD_TIME))) return 2;
    if (dayjs().isBefore(dayjs(FOUR_TIME))) return 3;
    return 4;
  }, []);
  const title = useMemo(() => TITLE[stage], [stage]);
  const to = useMemo(() => dayjs(TIME_POINTS[stage]), [stage]);
  const [duration, setDuration] = useState({ day: 0, time: '00:00:00' });

  useEffect(() => {
    const timer = setInterval(() => {
      const day = to.diff(now, 'd');
      const time = dayjs(to.diff(now)).subtract(8, 'h').format('HH:mm:ss');
      setDuration({ day, time });
    }, 1000);
    return () => clearInterval(timer);
  }, [now, to]);

  return (
    <div className={classnames('relative md:z-10 -z-10  w-full h-20 px-5 bg-gradient-to-b from-primary to-white transition-all duration-200 -mb-20 md:mb-0', className)}>
      <div className="items-center justify-end hidden w-full h-full md:flex">
        <TitleSvg className="absolute -translate-y-1/2 top-1/2 left-5" />
        <div className="flex flex-col mb-1 text-right text-black/50 lg:flex lg:space-x-5">
          <p className="mt-1 text-sm">{title}</p>
          <p>{duration.day} Days {duration.time}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
