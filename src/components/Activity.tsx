import { JudgeType } from 'data/judgesData';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
  }
};

function Activity({ activity, id }: Props) {
  const dateString = dayjs(activity['活動日期']).format('DD MMM');
  const yearString = dayjs(activity['活動日期']).format('YYYY');
  const isSignUp = dayjs().isAfter(dayjs(activity['發布日期']));
  return (
    <Link href={`/activity/${activity.id}`}>
      <div id={id} className="w-full py-5 md:p-5 border-t md:w-1/2 md:odd:border-r border-default relative before:content-none md:odd:before:content-[''] before:absolute before:h-10 before:w-10 before:top-0 before:right-0 before:translate-x-1/2 before:-translate-y-1/2 before:bg-white before:z-[1]">
        <div className="flex items-center justify-between">
          <p>{dateString}</p>
          {isSignUp && <p className="text-sm text-primary">開放報名中</p>}
          <p>{yearString}</p>
        </div>
        <h2 className="flex flex-col items-center justify-center h-20 text-lg text-center">
          <span className="text-sm">{activity['種類']}</span>
          {activity.Title}
        </h2>
        <div className="relative my-5 aspect-video">
          <Image src={activity.cover.url} layout="fill" objectFit="cover" alt={activity.Title} />
        </div>
        <p className="h-24 text-xs line-clamp-6">{activity['摘要']}fdsjkfljslkafj;kdls;jafklds ;jafkld ;sjafkl;jdks la;fjkdsl ;ajfkdls;jafkld; sjkafl;djs kal;fjkdsl;ah gjs;dlajfkld;sjafh kldshgjld cvkjnsahfdj klnvchj sfldhsacd jhfkld;shafjds</p>
      </div>
    </Link>
  );
}

export default Activity;
