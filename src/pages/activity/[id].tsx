import 'react-notion/src/styles.css';

import Header from 'components/Header';
import { getPage, getPageList, PageData } from 'lib/notion';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/future/image';
import React from 'react';
import { BlockMapType, NotionRenderer } from 'react-notion';
import SocialShareButton from 'components/SocialShareButton';

type ActivityInformation = {
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
};

type Props = {
  blocks: BlockMapType
  pageInformation: PageData<ActivityInformation>
};

function ActivityPage({ pageInformation, blocks }: Props) {
  return (
    <div className="activity">
      <Header />
      <div className="py-16 text-center">
        <h1>{pageInformation.Title}</h1>
        <h1 className="h2">{pageInformation['活動日期']}</h1>
      </div>
      <div className="px-5">
        <div className="relative w-full aspect-video">
          <Image src={pageInformation.cover.url} fill alt="" />
        </div>
        <div className="pt-3">
          <NotionRenderer blockMap={blocks} />
        </div>
        <SocialShareButton />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext<{ id: string }>) => {
  const id = context.params?.id;
  if (!id) return { notFound: true };

  try {
    const pageList = await getPageList(process.env.NOTION_ACTIVITY_DB_ID || '');
    const pageInformation = pageList.find((p) => p.id === id);

    const page = await getPage(id as string);

    return {
      props: {
        pageInformation: JSON.parse(JSON.stringify(pageInformation)),
        blocks: JSON.parse(JSON.stringify(page)),
      },
    };
  } catch (err) {
    // console.log(err);
    return { notFound: true };
  }
};

export default ActivityPage;
