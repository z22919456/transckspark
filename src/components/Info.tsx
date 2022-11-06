import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import placeholder from './assets/imagePlaceholderBase64';
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
      <h2 className="flex items-center justify-center h-20 text-lg text-center group-hover:text-primary">{information.Title}</h2>
      <div className="relative my-5 aspect-video">
        <Image placeholder="blur" blurDataURL={placeholder} src={information.cover.url} layout="fill" objectFit="cover" alt={information.Title} sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw" />
      </div>
      <p className="h-16 text-xs line-clamp-4 group-hover:text-primary">{information['摘要']}</p>
      <Link href={`/news/${information.id}`}>
        <p className="my-5 text-center group-hover:text-primary">
          <a className="cursor-pointer hover:text-primary">
            read more ➔
          </a>
        </p>
      </Link>
    </Card>
  );
}

export default Info;
