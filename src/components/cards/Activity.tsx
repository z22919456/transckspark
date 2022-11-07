import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import el from '@master/style-element.react';
import placeholder from '../assets/imagePlaceholderBase64';

type Props = {
  id?: string
  activity: {
    id: string
    Title: string
    '狀態': string
    '活動日期': string
    '發布日期': string
    '摘要': string
    '報名截止日期': string
    '種類': '導覽' | '講座' | '工作坊' | '影展' | '論壇'
    cover: {
      url: string
    }
  },
  onlySignUp: boolean
};

const Tag = el.div`px-2 text-xs border rounded-full border-default`;

function Activity({ activity, id, onlySignUp = true }: Props) {
  const dateString = dayjs(activity['活動日期']).format('DD MMM YYYY');
  const canSignUp = dayjs().isBefore(dayjs(activity['報名截止日期']));
  if (!canSignUp && onlySignUp) return <></>;
  return (
    <Link href={`/public_participation/${activity.id}`}>
      <div id={id} className="flex flex-wrap mb-3 border-b border-black cursor-pointer sm:flex-nowrap md:flex-wrap lg:flex-nowrap group">

        <div className="flex flex-col w-full pr-0 my-5 sm:pr-3 md:pr-0 lg:pr-3 sm:w-1/2 md:w-full lg:w-1/2">
          <div className="flex items-center justify-between">
            <p className="text-sm">{dateString}</p>
            <div className="flex space-x-1">
              <Tag>{activity['種類']}</Tag>
              {canSignUp && <Tag>開放報名中</Tag>}
            </div>
          </div>
          <h2 className="my-3 overflow-hidden text-lg text-justify whitespace-nowrap text-ellipsis group-hover:text-primary">{activity.Title}</h2>
          <p className="text-xs text-justify line-clamp-4 group-hover:text-primary">{activity['摘要']}</p>
          <p className="hidden mt-auto text-sm sm:block md:hidden lg:block group-hover:text-primary">Read More...</p>
        </div>

        <div className="relative w-full my-5 aspect-video sm:w-1/2 md:w-full lg:w-1/2 after:h-full after:w-full after:absolute after:top-0 after:left-0 group-hover:after:bg-primary-image-hover">
          <Image
            placeholder="blur"
            blurDataURL={placeholder}
            src={activity.cover.url}
            layout="fill"
            objectFit="cover"
            alt={activity.Title}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
          />
        </div>
      </div>
    </Link>
  );
}

export default Activity;
