import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Card from './Card';

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
    <Card>
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
    </Card>
  );
}

export default Info;
