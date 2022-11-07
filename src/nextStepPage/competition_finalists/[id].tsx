import 'react-notion-x/src/styles.css';

import Header from 'components/Header';
import SocialShareButton from 'components/SocialShareButton';
import Image from 'next/future/image';
import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import { WorkInformation, NotionPageData } from 'type';
import getPageServerSideProps from 'utils/getNotionServerProps';
import PaginationButton from 'components/PaginationButton';
import getNotionServerPaths from 'utils/getNotionServerPaths';
import placeholder from 'components/assets/imagePlaceholderBase64';
import { ExtendedRecordMap } from 'notion-types';

type Props = {
  blocks: ExtendedRecordMap
  pageInformation: NotionPageData<WorkInformation>
  nextPage: string
  prevPage: string
};

function WorkPage({
  pageInformation, blocks, nextPage, prevPage,
}: Props) {
  return (
    <div className="shortlist">
      <Header />
      <div className="py-16 text-center">
        <span className="small">{pageInformation['種類']}</span>
        <h1>{pageInformation.Title}</h1>
        <h1 className="h2">{pageInformation['製作者']}</h1>
      </div>
      <div className="px-5">
        <div className="relative w-full aspect-video">
          <Image placeholder="blur" blurDataURL={placeholder} src={pageInformation.cover.url} fill alt="" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="pt-3">
          <NotionRenderer components={{ nextImage: Image }} recordMap={blocks} />
        </div>
        <div className="flex items-end justify-between">

          <SocialShareButton left />
          <PaginationButton nextPage={nextPage ? `/competition_finalists/${nextPage}` : ''} prevPage={prevPage ? `/competition_finalists/${prevPage}` : ''} />
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = getNotionServerPaths(process.env.NOTION_WORK_DB_ID || '');

export const getStaticProps = getPageServerSideProps(process.env.NOTION_WORK_DB_ID || '');

export default WorkPage;
