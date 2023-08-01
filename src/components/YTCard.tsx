import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NotionPageData, UnnamedInformation } from 'type';
import placeholder from './assets/imagePlaceholderBase64';
import Card from './cards/Card';
import MedalImg from './assets/medal.png';

type Props = {
  data: NotionPageData<UnnamedInformation>
};

function YTCard({ data }: Props) {
  return (
    <Card>

      <div className="flex justify-between">
        <p className="small">{data['類型']}</p>
        <p className="small">{data['創作者']}</p>
      </div>
      <h2 className="flex items-center justify-center h-20 text-lg text-center">
        {data.Title}
      </h2>
      <div className="relative my-5 aspect-video">
        <Image placeholder="blur" blurDataURL={placeholder} src={data.cover.url} layout="fill" objectFit="cover" alt={data.cover.url ? data.Title : '修復中...'} sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw" />
      </div>
      <p className="h-16 text-xs line-clamp-4">{data['簡介']}</p>
      <Link href={data['YT連結']}>
        <p className="my-5 text-center">
          <a className="cursor-pointer hover:text-primary">
            read more ➔
          </a>
        </p>
      </Link>
    </Card>
  );
}

export default YTCard;
