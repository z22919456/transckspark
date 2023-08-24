import 'react-notion-x/src/styles.css';

import Header from 'components/Header';
import SocialShareButton from 'components/SocialShareButton';
import Image from 'next/future/image';
import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import { NotionPageData, OnlineExhibitionInformation } from 'type';
import getPageServerSideProps from 'utils/getNotionServerProps';
import PaginationButton from 'components/PaginationButton';
import getNotionServerPaths from 'utils/getNotionServerPaths';
import placeholder from 'components/assets/imagePlaceholderBase64';
import { ExtendedRecordMap } from 'notion-types';
import SEO from 'components/SEO';

type Props = {
  blocks: ExtendedRecordMap
  pageInformation: NotionPageData<OnlineExhibitionInformation>
  nextPage: string
  prevPage: string
};

function WorkPage({
  pageInformation, blocks, nextPage, prevPage,
}: Props) {
  return (
    <>
      <SEO title={`${pageInformation.Title}｜網路預展 Online Pre-exhibition`} description={pageInformation['簡介']} />
      <div className="online-exhibition">
        <Header />
        <div className="py-16 text-center">
          <span className="block small">{pageInformation['類型']}</span>
          <h1 className="inline-flex">
            {pageInformation.Title}
          </h1>
          <h1 className="h2">{pageInformation['創作者']}</h1>
        </div>
        <div className="px-5">
          <div className="relative w-full aspect-video">
            <Image placeholder="blur" blurDataURL={placeholder} src={pageInformation.cover.url} fill alt={pageInformation.cover.url ? pageInformation.Title : '修復中...'} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="pt-3">
            <NotionRenderer components={{ nextImage: Image }} recordMap={blocks} />
          </div>
          <div className="flex items-end justify-between">

            <SocialShareButton left />
            <PaginationButton nextPage={nextPage ? `/online_pre-exhibition/${nextPage}` : ''} prevPage={prevPage ? `/online_pre-exhibition/${prevPage}` : ''} />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = getNotionServerPaths(process.env.NOTION_ONLINE_EXHIBITION_DB_ID || '');

export const getStaticProps = getPageServerSideProps(process.env.NOTION_ONLINE_EXHIBITION_DB_ID || '');

export default WorkPage;
