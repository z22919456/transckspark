import 'react-notion/src/styles.css';

import Header from 'components/Header';
import SocialShareButton from 'components/SocialShareButton';
import Image from 'next/future/image';
import React from 'react';
import { BlockMapType, NotionRenderer } from 'react-notion';
import { ActivityInformation, NotionPageData } from 'type';
import getPageServerSideProps from 'utils/getNotionServerProps';
import getNotionServerPaths from 'utils/getNotionServerPaths';
import SEO from 'components/SEO';
import placeholder from 'components/assets/imagePlaceholderBase64';

type Props = {
  blocks: BlockMapType
  pageInformation: NotionPageData<ActivityInformation>
};

function ActivityPage({ pageInformation, blocks }: Props) {
  return (
    <>
      <SEO title="想像中正紀念堂的100種方式 Public Participation" />
      <div className="activity">
        <Header />
        <div className="py-16 text-center">
          <h1>{pageInformation.Title}</h1>
          <h1 className="h2">{pageInformation['活動日期']}</h1>
        </div>
        <div className="px-5">
          <div className="relative w-full aspect-video">
            <Image placeholder="blur" blurDataURL={placeholder} src={pageInformation.cover.url} fill alt="" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="pt-3">
            <NotionRenderer blockMap={blocks} />
          </div>
          <SocialShareButton />
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = getNotionServerPaths(process.env.NOTION_ACTIVITY_DB_ID || '');

export const getStaticProps = getPageServerSideProps(process.env.NOTION_ACTIVITY_DB_ID || '');

export default ActivityPage;
