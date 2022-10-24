import 'react-notion/src/styles.css';

import Header from 'components/Header';
import SocialShareButton from 'components/SocialShareButton';
import Image from 'next/future/image';
import React from 'react';
import { BlockMapType, NotionRenderer } from 'react-notion';
import { ActivityInformation, NotionPageData } from 'type';
import getPageServerSideProps from 'utils/getNotionServerProps';

type Props = {
  blocks: BlockMapType
  pageInformation: NotionPageData<ActivityInformation>
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

export const getServerSideProps = getPageServerSideProps;

export default ActivityPage;
