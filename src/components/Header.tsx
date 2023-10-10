import classnames from 'classnames';
import TitleSvg from 'components/assets/title.svg';
import dayjs from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';

type Props = {
  className?: string;
};

const FIRST_TIME = '2022-12-01T12:00:00.000+08:00';
const SECOND_TIME = '2023-02-15T12:00:00.000+08:00';
const THIRD_TIME = '2023-03-10T12:00:00.000+08:00';
const FOUR_TIME = '2023-08-25T10:30:00.000+08:00';
const FIVE_TIME = '2023-09-10T18:00:00.000+08:00';
const SIX_TIME = '2023-10-10T09:00:00.000+08:00';
const SEVEN_TIME = '2023-12-17T18:00:00.000+08:00';

const TIME_POINTS = [
  FIRST_TIME,
  SECOND_TIME,
  THIRD_TIME,
  FOUR_TIME,
  FIVE_TIME,
  SIX_TIME,
  SEVEN_TIME,
];

const TITLE = [
  '初審入圍名單公布倒數',
  '決選交件截止日倒數',
  '決選優勝者公布',
  '成果展覽開幕日',
  '成果展覽展覽中',
  '成果展覽開幕日',
  '中正紀念堂 展覽中',
];

function Header({ className }: Props) {
  const now = dayjs();
  const stageIndex = useMemo(() => TIME_POINTS.findIndex((time) => dayjs().isBefore(dayjs(time))), []);

  const title = useMemo(() => TITLE[stageIndex], [stageIndex]);
  const to = useMemo(() => dayjs(TIME_POINTS[stageIndex]), [stageIndex]);
  const [duration, setDuration] = useState({ day: 0, time: '00:00:00' });

  useEffect(() => {
    if (stageIndex === -1) return () => {};
    const timer = setInterval(() => {
      const day = to.diff(now, 'd');
      const time = dayjs(to.diff(now)).subtract(8, 'h').format('HH:mm:ss');
      setDuration({ day, time });
    }, 1000);
    return () => clearInterval(timer);
  }, [now, to]);

  return (
    <div
      className={classnames(
        'relative md:z-10 -z-10  w-full h-20 px-5 bg-gradient-to-b from-primary to-white transition-all duration-200 -mb-20 md:mb-0',
        className,
      )}
    >
      <div className="items-center justify-end hidden w-full h-full md:flex">
        <TitleSvg className="absolute -translate-y-1/2 top-1/2 left-5" />
        {stageIndex !== -1 ? (
          <div className="flex flex-col mb-1 text-right text-black/50 lg:flex lg:space-x-5">
            <p className="mt-1 text-sm">{title}</p>

            <p>
              {duration.day} Days {duration.time}
            </p>
          </div>
        ) : (
          <div className="flex flex-col mb-1 text-right text-black/50 lg:flex lg:space-x-5">
            <p className="mt-1 text-sm">{title}</p>
            <p>
              {dayjs().format('YYYY/MM/DD')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
