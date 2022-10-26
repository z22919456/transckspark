import classnames from 'classnames';
import FacebookIcon from 'components/assets/footer/fb.svg';
import YoutubeIcon from 'components/assets/footer/yt.svg';
import List from 'components/assets/nav/list.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import NavButton from './NavButton';

type Props = { onClose: () => void };

const NAV_LIST = [
  { name: 'English', href: '/en' },
  { name: '關於', href: '/' },
  { name: '最新消息', href: '/news' },
  { name: '競圖', href: '/competition' },
  { name: '評審', href: '/judges' },
  { name: '入圍作品一覽(2022.12.1揭曉)', href: '/competition_finalists', inactive: true },
  { name: '想像中正紀念堂的100種方式', href: '/public_participation' },
  { name: '常見問答', href: '/faq' },
  // { name: '競圖成果展覽', href: '/exhibition' },
];

function Navigation({ onClose }: Props) {
  const route = useRouter();
  const { pathname } = route;
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-screen h-screen max-h-screen p-5 overflow-hidden text-white md:w-1/2 bg-default">
      <List className="mt-3" />
      <div className="relative h-full px-3 ml-3 lg:ml-14 max-h-[720px] w-full">
        <ul className="space-y-3">
          {NAV_LIST.map((list) => (
            <li className="h3" key={list.href}>
              {list.inactive ? (
                <p className={classnames('pb-1 transition-all ease-out delay-200 border-b-2 text-gray-500 border-default', pathname === list.href && 'border-white')} onClick={onClose} >
                  {list.name}
                </p>
              ) : (
                <Link href={list.href}>
                  <a className={classnames('pb-1 transition-all ease-out delay-200 border-b-2 hover:translate-x-5 hover:border-white border-default', pathname === list.href && 'border-white')} onClick={onClose} >
                    {list.name}
                  </a>
                </Link>
              )
              }

            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 left-0 flex flex-wrap items-center">
          <Link href="https://www.youtube.com/playlist?list=PLZJKcj3-88_jHVt2MOGOuW8zSzpLb4r6r">
            <a rel="noreferrer noopener" target="_blank">
              <FacebookIcon className="w-6 h-6 mx-5 fill-white" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/transckspark/">
            <a rel="noreferrer noopener" target="_blank">
              <YoutubeIcon className="w-6 h-6 mx-5 fill-white" />
            </a>
          </Link>
          <a className="mx-5 small" href="email://info@vipassanacreative.com">
            info@vipassanacreative.com
          </a>
        </div>
      </div>
      <NavButton close className="absolute top-0 right-0" onClick={onClose} />
    </nav>
  );
}

export default Navigation;
