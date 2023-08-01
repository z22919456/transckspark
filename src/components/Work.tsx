import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NotionPageData, ExhibitionInformation } from 'type';
import placeholder from './assets/imagePlaceholderBase64';
import Card from './cards/Card';
import MedalImg from './assets/medal.png';

type Props = {
  work: NotionPageData<ExhibitionInformation>
};

function Work({ work }: Props) {
  return (
    <Card>

      <div className="flex justify-between">
        <p className="small">{work['種類']}</p>
        <p className="small">{work['製作者']}</p>
      </div>
      <h2 className="flex items-center justify-center h-20 text-lg text-center">
        {work['優勝'] && <Image src={MedalImg} width={30} height={30} alt="medal" />}
        {work.Title}
      </h2>
      <div className="relative my-5 aspect-video">
        <Image placeholder="blur" blurDataURL={placeholder} src={work.cover.url} layout="fill" objectFit="cover" alt={work.cover.url ? work.Title : '修復中...'} sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw" />
      </div>
      <p className="h-16 text-xs line-clamp-4">{work['簡介']}</p>
      <Link href={`/exhibition/${work.id}`}>
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
