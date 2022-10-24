import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NotionPageData, WorkInformation } from 'type';

type Props = {
  work: NotionPageData<WorkInformation>
};

function Work({ work }: Props) {
  return (
    <div className="w-full py-5 md:p-5 border-t md:w-1/2 md:odd:border-r border-default relative before:content-none md:odd:before:content-[''] before:absolute before:h-10 before:w-10 before:top-0 before:right-0 before:translate-x-1/2 before:-translate-y-1/2 before:bg-white before:z-[1]">
      <div className="flex justify-between">
        <p className="small">{work['種類']}</p>
        <p className="small">{work['製作者']}</p>
      </div>
      <h2 className="flex items-center justify-center h-20 text-lg text-center">{work.Title}</h2>
      <div className="relative my-5 aspect-video">
        <Image src={work.cover.url} layout="fill" objectFit="cover" alt={work.Title} />
      </div>
      <p className="h-16 text-xs line-clamp-4">{work['簡介']}</p>
      <Link href={`/competition_finalists/${work.id}`}>
        <p className="my-5 text-center">
          <a className="cursor-pointer hover:text-primary">
            read more ➔
          </a>
        </p>
      </Link>
    </div>
  );
}

export default Work;
