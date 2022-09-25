import React from 'react'
import List from 'components/assets/nav/list.svg'
import NavButton from './NavButton'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames';
import YoutubeIcon from 'components/assets/footer/yt.svg'
import FacebookIcon from 'components/assets/footer/fb.svg'

type Props = { onClose: () => void }

const NAV_LIST = [
  { name: 'English', href: "/english" },
  { name: '關於', href: "/about" },
  { name: '最新消息', href: "/news" },
  { name: '競圖', href: "/competition" },
  { name: '評審', href: "/judge" },
  { name: '入圍作品一覽', href: "/shortlist" },
  { name: '想像中正紀念堂的100種方式', href: "/activity" },
  { name: '常見問答', href: "/faq" },
  { name: '競圖成果展覽', href: "/exhibition" },
]

function Navigation({ onClose }: Props) {
  const route = useRouter()
  const pathname = route.pathname
  return (
    <nav className="fixed top-0 left-0 flex w-1/2 h-screen max-h-screen p-5 overflow-hidden text-white bg-default">
      <List className="mt-3" />
      <div className="relative h-full px-3 ml-3 lg:ml-14 max-h-[720px]">
        <ul className="space-y-3">
          {NAV_LIST.map(list => (
            <li className="h1">
              <Link href={list.href}>
                <a className={classnames('pb-1 transition-all ease-out delay-200 border-b-2 hover:border-white border-default', pathname == list.href && 'border-white')} onClick={onClose} >
                  {list.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 left-0 flex flex-wrap items-center space-x-5">
          <FacebookIcon className="w-6 h-6 fill-white" />
          <YoutubeIcon className="w-6 h-6 fill-white" />
          <a className="small" href="email://info@vipassanacreative.com">
            info@vipassanacreative.com
          </a>
        </div>
      </div>
      <NavButton close className="absolute top-0 right-0" onClick={onClose} />
    </nav>
  )
}

export default Navigation