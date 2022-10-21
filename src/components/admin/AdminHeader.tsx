import { faPage4 } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

function AdminHeader() {
  const { data: session } = useSession();

  return (
    <nav className="flex-shrink-0 w-40 h-full p-5 bg-default/10">
      <h1 className="text-2xl font-bold text-default">後台</h1>
      <ul className="mt-5 space-y-3">
        <li className="cursor-pointer">
          <Link href="/">
            <span>
              <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
              最新消息
            </span>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/">
            <span>
              <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
              活動
            </span>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/">
            <span>
              <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
              作品
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminHeader;
