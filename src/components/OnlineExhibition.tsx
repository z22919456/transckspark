import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NotionPageData, OnlineExhibitionInformation } from 'type';
import placeholder from './assets/imagePlaceholderBase64';
import Card from './cards/Card';

type Props = {
  work: NotionPageData<OnlineExhibitionInformation>
};

function OnlineExhibition({ work }: Props) {
  return (
    <Card>

      <div className="flex justify-between">
        <p className="small">{work['類型']}</p>
        <p className="small">{work['創作者']}</p>
      </div>
      <h2 className="flex items-center justify-center h-20 text-lg text-center">
        {work.Title}
      </h2>
      <div className="relative my-5 aspect-video">
        <Image placeholder="blur" blurDataURL={placeholder} src={work.cover.url} layout="fill" objectFit="cover" alt={work.cover.url ? work.Title : '修復中...'} sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw" />
      </div>
      <p className="h-16 text-xs line-clamp-4">{work['簡介']}</p>
      <Link href={`/exhibition_preview/${work.id}`}>
        <p className="my-5 text-center">
          <a className="cursor-pointer hover:text-primary">
            read more ➔
          </a>
        </p>
      </Link>
    </Card>
  );
}

export default OnlineExhibition;
