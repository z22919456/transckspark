import React, { useEffect, useState } from 'react'
import TitleSvg from 'components/assets/title.svg'
import Link from 'next/link'
import dayjs from 'dayjs'
import classnames from 'classnames';

type Props = {
  className?: string
}

function Header({ className }: Props) {
  const now = dayjs()
  const to = dayjs('2022-12-31');
  const [duration, setDuration] = useState({ day: 0, time: '00:00:00' })

  useEffect(() => {
    const timer = setInterval(() => {
      const day = to.diff(now, 'd')
      const time = dayjs(to.diff(now)).format("HH:MM:ss")
      setDuration({ day, time })
    }, 1000)
    return () => clearInterval(timer);
  }, [now, to])

  return (
    <div className={classnames("relative flex z-10 items-center justify-end w-full h-20 px-5 bg-gradient-to-b from-primary to-white transition-all duration-200", className)}>
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
  )
}

export default Header