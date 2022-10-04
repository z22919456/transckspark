import EmailIcon from 'components/assets/footer/email.svg';
import FacebookIcon from 'components/assets/footer/fb.svg';
import MinistryCultureIcon from 'components/assets/footer/ministry-culture.svg';
import Organizer1Icon from 'components/assets/footer/organizer-1.svg';
import Organizer2Icon from 'components/assets/footer/organizer-2.svg';
import Organizer3Icon from 'components/assets/footer/organizer-3.svg';
import PlanningIcon from 'components/assets/footer/planning.svg';
import YoutubeIcon from 'components/assets/footer/yt.svg';
import Link from 'next/link';
import React from 'react';

import Column from './Column';

function Footer() {
  return (
    <div className="relative z-50 block w-full overflow-hidden bg-footer/95">
      {/* sm */}
      <div className="block w-full my-5 text-center md:hidden">
        <p className="small">
          中正紀念堂園區  新願景概念競圖小組
        </p>
        <div className="flex items-center justify-center w-full my-5 space-x-5 text-center">
          <Link href="mail:info@vipassanacreative.com">
            <EmailIcon />
          </Link>
          <Link href="/">
            <YoutubeIcon className="fill-default" />
          </Link>
          <Link href="/">
            <FacebookIcon className="fill-default" />
          </Link>
          <Link href="/">
            <a className="small">
              隱私權政策
            </a>
          </Link>
        </div>
        <div className="flex w-full text-center">
          <div className="w-5/12 p-3 py-2 border-r border-black">
            <p className="text-xs">主辦單位</p>
            <div className="flex justify-center">
              <Organizer1Icon />
              <Organizer2Icon />
              <Organizer3Icon />
            </div>
          </div>
          <div className="w-1/6 p-2 py-2 border-r border-black ">
            <p className="text-xs whitespace-nowrap">統籌單位</p>
            <PlanningIcon className="mx-auto" />
          </div>
          <div className="w-5/12 p-3 py-2 ">
            <p className="text-xs">計畫補助</p>
            <MinistryCultureIcon className="mx-auto" />
          </div>
        </div>
      </div>

      {/* md */}

      <div className="flex-wrap hidden w-full my-3 text-center md:flex xl:hidden">
        <Column className="w-1/6 border-r">
          <Link href="/">
            <a className="small">
              隱私權政策
            </a>
          </Link>
        </Column>
        <Column className="w-1/4 border-r">
          <p className="text-center small">
            中正紀念堂園區
            <br />
            新願景概念競圖小組
          </p>
        </Column>
        <Column className="!justify-start w-7/12 space-x-5">
          <a href="mail:info@vipassanacreative.com">
            <small>info@vipassanacreative.com</small>
          </a>
          <Link href="/">
            <YoutubeIcon className="fill-default" />
          </Link>
          <Link href="/">
            <FacebookIcon className="fill-default" />
          </Link>
        </Column>

        <Column className="justify-around w-5/12 border-r">
          <p className="ml-2 small">主辦單位</p>
          <Organizer1Icon />
          <Organizer2Icon />
          <Organizer3Icon />
        </Column>
        <Column className="justify-around w-1/4 border-r">
          <p className="small">統籌單位</p>
          <PlanningIcon />
        </Column>
        <Column className="justify-around w-1/3">
          <p className="small">計畫補助</p>
          <MinistryCultureIcon />
        </Column>
      </div>

      {/* lg */}
      <div className="flex-wrap hidden w-full my-3 text-center xl:flex">
        <Column className="justify-between w-1/3 border-r ">
          <p className="text-center small whitespace-nowrap">
            中正紀念堂園區
            <br />
            新願景概念競圖小組
          </p>
          <a href="mail:info@vipassanacreative.com" className="ml-3 text-xs">
            info@vipassanacreative.com
          </a>
          <Link href="/">
            <YoutubeIcon className="fill-default" />
          </Link>
          <Link href="/">
            <FacebookIcon className="fill-default" />
          </Link>
        </Column>
        <Column className="w-1/12">
          <Link href="/">
            <a className="small">
              隱私權政策
            </a>
          </Link>
        </Column>
        <Column className="!justify-end w-1/12">
          <p className="ml-2 small">主辦單位</p>
        </Column>
        <Column className="justify-around w-1/6 pl-0 border-r">
          <Organizer1Icon />
          <Organizer2Icon />
          <Organizer3Icon />
        </Column>
        <Column className="justify-around w-1/3">
          <p className="small">統籌單位</p>
          <PlanningIcon />
          <div className="h-full border-l border-default" />
          <p className="small">計畫補助</p>
          <MinistryCultureIcon />
        </Column>

      </div>
    </div>
  );
}

export default Footer;
