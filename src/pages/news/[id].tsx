import 'react-notion-x/src/styles.css';

import Header from 'components/Header';
import SocialShareButton from 'components/SocialShareButton';
import Image from 'next/future/image';
import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import { NewsInformation, NotionPageData } from 'type';

import getNotionServerPaths from 'utils/getNotionServerPaths';
import SEO from 'components/SEO';
import placeholder from 'components/assets/imagePlaceholderBase64';
import { ExtendedRecordMap } from 'notion-types';
import getPageServerSideProps from '../../utils/getNotionServerProps';

type Props = {
  blocks: ExtendedRecordMap
  pageInformation: NotionPageData<NewsInformation>
};

function NewsPage({ pageInformation, blocks }: Props) {
  return (
    <>
      <SEO title="最新消息 News" description="最新競圖消息、最新想像中正紀念堂的100種方式公告。" />
      <div className="news">
        <Header />
        <div className="py-16 text-center">
          <h1>{pageInformation.Title}</h1>
          <h1 className="h2">{pageInformation['活動日期']}</h1>
        </div>
        <div className="px-5">
          <div className="relative w-full aspect-video">
            <Image placeholder="blur" blurDataURL={placeholder} src={pageInformation.cover.url} fill alt="" className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="pt-3">
            <NotionRenderer components={{ nextImage: Image }} recordMap={blocks}></NotionRenderer>
          </div>
        </div>
        <SocialShareButton />
      </div>
    </>
  );
}

export const getStaticPaths = getNotionServerPaths(process.env.NOTION_NEWS_DB_ID || '');

export const getStaticProps = getPageServerSideProps(process.env.NOTION_NEWS_DB_ID || '');

export default NewsPage;
