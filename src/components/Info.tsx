import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  information: {
    id: string
    Title: string
    '狀態': string
    '活動日期': string
    '發布日期': string
    '摘要': string
    cover: {
      url: string
    }
  }
};

function Info({ information }: Props) {
  const dateString = dayjs(information['活動日期']).format('DD MMM');
  const yearString = dayjs(information['活動日期']).format('YYYY');
  return (
    <div className="w-full py-5 md:p-5 border-t md:w-1/2 md:odd:border-r border-default relative before:content-none md:odd:before:content-[''] before:absolute before:h-10 before:w-10 before:top-0 before:right-0 before:translate-x-1/2 before:-translate-y-1/2 before:bg-white before:z-[1]">
      <div className="flex justify-between">
        <p>{dateString}</p>
        <p>{yearString}</p>
      </div>
      <h2 className="flex items-center justify-center h-20 text-lg text-center">{information.Title}</h2>
      <div className="relative my-5 aspect-video">
        <Image src={information.cover.url} layout="fill" objectFit="cover" alt={information.Title} />
      </div>
      <p className="h-16 text-xs line-clamp-4">{information['摘要']}</p>
      <Link href={`/news/${information.id}`}>
        <p className="my-5 text-center">
          <a className="cursor-pointer hover:text-primary">
            read more ➔
          </a>
        </p>
      </Link>
    </div>
  );
}

export default Info;
