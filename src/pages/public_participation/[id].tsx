import 'react-notion-x/src/styles.css';

import Header from 'components/Header';
import SocialShareButton from 'components/SocialShareButton';
import Image from 'next/future/image';
import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import { ActivityInformation, NotionPageData } from 'type';
import getNotionServerPaths from 'utils/getNotionServerPaths';
import SEO from 'components/SEO';
import placeholder from 'components/assets/imagePlaceholderBase64';
import { ExtendedRecordMap } from 'notion-types';
import getPageServerSideProps from 'utils/getNotionServerProps';

type Props = {
  blocks: ExtendedRecordMap
  pageInformation: NotionPageData<ActivityInformation>
};

function ActivityPage({ pageInformation, blocks }: Props) {
  return (
    <>
      <SEO title="想像中正紀念堂的100種方式 Public Participation" description="首都之心，城中轉正：中正紀念堂園區新願景概念競圖，是民間發起的紙上概念競圖，由台灣現代建築學會、中華民國都市設計學會、中華民國景觀學會國內三大空間規劃設計專業學會共同發起。攸關台灣當代城市生活的形塑和社會價值的再造，也是讓生活塑造城市、強化參與的難得機會。" />
      <div className="activity">
        <Header />
        <div className="py-16 text-center">
          <h1>{pageInformation.Title}</h1>
          <h1 className="h2">{pageInformation['活動日期']}</h1>
        </div>
        <div className="px-5">
          <div className="relative w-full aspect-video">
            <Image placeholder="blur" blurDataURL={placeholder} src={pageInformation.cover.url} fill className="object-cover" alt="" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="pt-3">
            <NotionRenderer components={{ nextImage: Image }} recordMap={blocks}></NotionRenderer>
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
