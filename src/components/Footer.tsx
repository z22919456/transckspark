import Link from 'next/link'
import React from 'react'
import YoutubeIcon from 'components/assets/footer/yt.svg'
import FacebookIcon from 'components/assets/footer/fb.svg'
import Organizer1Icon from 'components/assets/footer/organizer-1.svg'
import Organizer2Icon from 'components/assets/footer/organizer-2.svg'
import Organizer3Icon from 'components/assets/footer/organizer-3.svg'
import PlanningIcon from 'components/assets/footer/planning.svg'
import MinistryCultureIcon from 'components/assets/footer/ministry-culture.svg'


type Props = {}

function Footer({ }: Props) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-24 bg-footer/95">
      <div className="flex items-center justify-center h-full py-2 my-auto">

        <div className="flex items-center justify-around w-1/3 px-3 border-r border-default">
          <p className="text-center">
            <small>
              中正紀念堂園區
              <br />
              新願景概念競圖小組
            </small>
          </p>
          <a href="mail:info@vipassanacreative.com">
            <small>info@vipassanacreative.com</small>
          </a>
          <Link href="/">
            <YoutubeIcon />
          </Link>
          <Link href="/">
            <FacebookIcon />
          </Link>
        </div>

        <div className="flex items-center justify-between w-1/3 px-5 border-r border-default">
          <Link href="/">
            <small>
              隱私權政策
            </small>
          </Link>
          <p><small>主辦單位</small></p>
          <Organizer1Icon />
          <Organizer2Icon />
          <Organizer3Icon />
        </div>

        <div className="flex w-1/3 py-5 ">
          <div className="flex items-center justify-between w-2/5 px-5 border-r border-default">
            <p><small>統籌單位</small></p>
            <PlanningIcon />
          </div>
          <div className="flex items-center justify-between w-3/5 px-5">
            <p><small>計畫補助</small></p>
            <MinistryCultureIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer