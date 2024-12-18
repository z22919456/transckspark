import classnames from 'classnames';
import FacebookIcon from 'components/assets/footer/fb.svg';
import YoutubeIcon from 'components/assets/footer/yt.svg';
import List from 'components/assets/nav/list.svg';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import NavButton from './NavButton';

type Props = { onClose: () => void };

const NAV_LIST = [
  { name: 'English', subName: '', href: '/en' },
  { name: '關於', subName: 'About the Project', href: '/' },
  { name: '最新消息', subName: 'News', href: '/news' },
  { name: '網路預展', subName: 'Exhibition Preview', href: '/exhibition_preview' },
  { name: '優勝推薦影片', subName: 'Introduction of Winning Entry', href: '/introduction_of_winning_entry' },
  { name: '展覽推薦影片', subName: 'Recommendation Video', href: '/recommendation_videos' },
  { name: '入圍作品及優勝名單', subName: 'Competition Finalists & Winners', href: '/exhibition' },
  { type: 'dividing' },
  { name: '競圖活動說明', subName: 'Competition', href: '/competition' },
  { name: '評圖委員', subName: 'The Jury', href: '/judges' },
  { name: '想像中正紀念堂的100種方式', subName: 'Public Participation', href: '/public_participation' },
  { name: '常見問答', subName: 'FAQ', href: '/faq' },
];

function Navigation({ onClose }: Props) {
  const route = useRouter();

  const isShow = dayjs().isBefore(dayjs('2022-12-01 12:00'));

  const { pathname } = route;
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-screen h-screen max-h-screen p-5 overflow-hidden text-white md:w-1/2 bg-default">
      <List className="flex-shrink-0 w-16 mt-3" />
      <div className="relative h-full px-3 ml-0 lg:ml-5 max-h-[720px] w-full p-16">
        <ul className="h-full space-y-3 overflow-y-auto">
          {NAV_LIST.map((list) => (
            list.type === 'dividing' ? (
              <hr className="border-gray-400" />
            ) : (
              <li className="h3" key={list.href}>
                <Link href={list.href || ''}>
                  <a className={classnames('pb-1 transition-all ease-out delay-200 border-b-2 hover:translate-x-5 hover:border-white border-default', pathname === list.href && 'border-white')} onClick={onClose} >
                    {list.name} <span className="text-xs font-normal">{list.subName}</span>
                  </a>
                </Link>
              </li>
            )))}
        </ul>
        <div className="absolute bottom-0 left-0 flex flex-wrap items-center">
          <Link href="https://www.facebook.com/transckspark/">
            <a rel="noreferrer noopener" target="_blank">
              <FacebookIcon className="w-6 h-6 mx-5 fill-white" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/playlist?list=PLZJKcj3-88_jHVt2MOGOuW8zSzpLb4r6r">
            <a rel="noreferrer noopener" target="_blank">
              <YoutubeIcon className="w-6 h-6 mx-5 fill-white" />
            </a>
          </Link>
          <a className="mx-5 small" href="email://info@vcreative.org">
            info@vcreative.org
          </a>
        </div>
      </div>
      <NavButton close className="absolute top-0 right-0" onClick={onClose} />
    </nav>
  );
}

export default Navigation;
