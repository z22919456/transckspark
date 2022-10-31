import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';

type Props = {
  title?: string
  description?: string
};

function SEO({ title, description }: Props) {
  const allTitle = title ? `${title} | 中正紀念堂園區新願景概念競圖` : '中正紀念堂園區新願景概念競圖';
  const allDescription = description || '首都之心，城中轉正：中正紀念堂園區新願景概念競圖，是民間發起的紙上概念競圖，由台灣現代建築學會、中華民國都市設計學會、中華民國景觀學會國內三大空間規劃設計專業學會共同發起。攸關台灣當代城市生活的形塑和社會價值的再造，也是讓生活塑造城市、強化參與的難得機會。';
  return (
    <NextSeo
      title={allTitle}
      description={allDescription}
      openGraph={{
        type: 'website',
        title: allTitle,
        description: allDescription,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_HOST}/metatag.png`,
            alt: 'Og Image Alt',
            type: 'image/png',
          },
        ],
      }}
    />
  );
}

export default SEO;
