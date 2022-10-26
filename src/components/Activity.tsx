import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Card from './Card';

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

function Activity({ activity, id, onlySignUp = true }: Props) {
  const dateString = dayjs(activity['活動日期']).format('DD MMM');
  const yearString = dayjs(activity['活動日期']).format('YYYY');
  const canSignUp = dayjs().isBefore(dayjs(activity['報名截止日期']));
  if (!canSignUp && onlySignUp) return <></>;
  return (
    <Link href={`/activity/${activity.id}`}>
      <Card id={id} >
        <div className="flex items-center justify-between">
          <p>{dateString}</p>
          {canSignUp && <p className="text-sm text-primary">開放報名中</p>}
          <p>{yearString}</p>
        </div>
        <h2 className="flex flex-col items-center justify-center h-20 text-lg text-center">
          <span className="text-sm">{activity['種類']}</span>
          {activity.Title}
        </h2>
        <div className="relative my-5 aspect-video">
          <Image src={activity.cover.url} layout="fill" objectFit="cover" alt={activity.Title} />
        </div>
        <p className="h-24 text-xs line-clamp-6">{activity['摘要']}</p>
      </Card>
    </Link>
  );
}

export default Activity;
