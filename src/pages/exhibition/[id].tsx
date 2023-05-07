import 'react-notion-x/src/styles.css';

import Header from 'components/Header';
import SocialShareButton from 'components/SocialShareButton';
import Image from 'next/future/image';
import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import { ExhibitionInformation, NotionPageData } from 'type';
import getPageServerSideProps from 'utils/getNotionServerProps';
import PaginationButton from 'components/PaginationButton';
import getNotionServerPaths from 'utils/getNotionServerPaths';
import placeholder from 'components/assets/imagePlaceholderBase64';
import { ExtendedRecordMap } from 'notion-types';
import SEO from 'components/SEO';
import MedalImg from 'components/assets/medal.png';

type Props = {
  blocks: ExtendedRecordMap
  pageInformation: NotionPageData<ExhibitionInformation>
  nextPage: string
  prevPage: string
};

function WorkPage({
  pageInformation, blocks, nextPage, prevPage,
}: Props) {
  return (
    <>
      <SEO title={`${pageInformation.Title}｜競圖成果展覽 Exhibition`} description="" />
      <div className="exhibition">
        <Header />
        <div className="py-16 text-center">
          <span className="block small">{pageInformation['種類']}</span>
          <h1 className="inline-flex">
            {pageInformation['優勝'] && <Image src={MedalImg} width={42} alt="medal" className="-ml-3" />}
            {pageInformation.Title}
          </h1>
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
            <PaginationButton nextPage={nextPage ? `/exhibition/${nextPage}` : ''} prevPage={prevPage ? `/exhibition/${prevPage}` : ''} />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = getNotionServerPaths(process.env.NOTION_WORK_DB_ID || '');

export const getStaticProps = getPageServerSideProps(process.env.NOTION_WORK_DB_ID || '');

export default WorkPage;
