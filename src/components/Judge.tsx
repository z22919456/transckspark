import { JudgeType } from 'data/judgesData';
import Image from 'next/image';
import React from 'react';

type Props = JudgeType & { final?: boolean };

function Judge({
  name, title, information, engName, final = false, id, image,
}: Props) {
  return (
    <div className="w-full py-5 md:p-5 border-t md:w-1/2 md:odd:border-r border-default relative before:content-none md:odd:before:content-[''] before:absolute before:h-10 before:w-10 before:top-0 before:right-0 before:translate-x-1/2 before:-translate-y-1/2 before:bg-white before:z-[1]" id={`${final ? 'final' : 'first'}-${id}`}>
      <div className="flex justify-between text-xs">
        <p>{final ? '決選評審' : '初選評審'}</p>
        <p>{engName}</p>
      </div>
      <h2 className="py-10 text-lg text-center">{name}</h2>
      <p className="text-xs text-center line-clamp-1">{title}</p>
      <div className="relative my-5 aspect-video">
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}${image}`} layout="fill" objectFit="cover" alt={name} />
      </div>
      <p className="text-xs">{information}</p>
    </div>
  );
}

export default Judge;
