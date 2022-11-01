import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NotionPageData, WorkInformation } from 'type';
import Card from './Card';

type Props = {
  work: NotionPageData<WorkInformation>
};

function Work({ work }: Props) {
  return (
    <Card>
      <div className="flex justify-between">
        <p className="small">{work['種類']}</p>
        <p className="small">{work['製作者']}</p>
      </div>
      <h2 className="flex items-center justify-center h-20 text-lg text-center">{work.Title}</h2>
      <div className="relative my-5 aspect-video">
        <Image placeholder="blur" blurDataURL="/image_loading.jpg" src={work.cover.url} layout="fill" objectFit="cover" alt={work.Title} sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw" />
      </div>
      <p className="h-16 text-xs line-clamp-4">{work['簡介']}</p>
      <Link href={`/competition_finalists/${work.id}`}>
        <p className="my-5 text-center">
          <a className="cursor-pointer hover:text-primary">
            read more ➔
          </a>
        </p>
      </Link>
    </Card>
  );
}

export default Work;
