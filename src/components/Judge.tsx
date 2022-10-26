import { JudgeType } from 'data/judgesData';
import Image from 'next/image';
import React from 'react';
import Card from './Card';

type Props = JudgeType & { final?: boolean };

function Judge({
  name, title, information, engName, final = false, id, image,
}: Props) {
  return (
    <Card id={`${final ? 'final' : 'first'}-${id}`}>
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
    </Card>
  );
}

export default Judge;
