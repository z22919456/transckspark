import Header from 'components/Header';
import React from 'react';
import {
  TabContent, TabTrigger, TabTriggerContainer, TabContainer, TabList,
} from 'components/Tabs';
import { getPageList } from 'lib/notion';
import { NotionPageData, OnlineExhibitionInformation } from 'type';
import SEO from 'components/SEO';
import OnlineExhibition from 'components/OnlineExhibition';

type Props = {

  pageList: NotionPageData<OnlineExhibitionInformation>[]
};

const INVITED_WORKS_1 = [
  {
    title: 'Searchlight Culture Lab.',
    description: '台灣',
  },
  {
    title: '吳錫山＋張集強',
    description: '馬來西亞',
  },
];

const INVITED_WORKS_2 = [
  {
    title: '藏游回metaODYSSEY',
    year: '1999',
    description: '設計者、非台灣國家：徐大剛｜設計者學校：淡江大學 建築學系｜指導老師：龔書章 老師',
  },
  {
    title: '城市游擊Nomad City',
    year: '2010',
    description: '設計者、非台灣國家：林楷軒｜設計者學校：中原大學 建築學系｜指導老師：黃俊銘 老師',
  },
  {
    title: '都市身體劇場',
    year: '2014',
    description: '設計者、非台灣國家：曾彥芳｜設計者學校：國立成功大學 建築學系｜指導老師：古爵誌 老師',
  },
  {
    title: '權力空間的轉型───滲透與瓦解',
    year: '2019',
    description: '設計者、非台灣國家：蔡宜庭｜設計者學校：中原大學 建築學系｜指導老師：許志維 老師',
  },
  {
    title: '辯證的整體－中正／圖書紀念園區',
    year: '2021',
    description: '設計者、非台灣國家：傅鈺崴｜設計者學校：東海大學 建築學系｜指導老師：邱浩修、林昌修 老師',
  },
  {
    title: 'Shifting Focus',
    year: '2022',
    description: '設計者、非台灣國家：Mallisyn Bruce（美國）｜設計者學校：華盛頓大學 建築學系｜指導老師：侯志仁、邱郁涵 老師',
  },
  {
    title: 'Common Ground：People, Nature & History',
    year: '2022',
    description: '設計者、非台灣國家：Phu Ngon Hnin（緬甸）｜設計者學校：華盛頓大學 建築學系｜指導老師：侯志仁、邱郁涵 老師',
  },
  {
    title: '觀天計畫：新紀念公園',
    year: '2022',
    description: '設計者、非台灣國家：鍾詠圳｜設計者學校：國立臺北科技大學 建築學系｜指導老師：蘇弘 老師',
  },
  {
    title: '台灣新國會園區－中正紀念堂轉型正義',
    year: '2022',
    description: '設計者、非台灣國家：顏佳榮、陳宜和、王子嘉、喬洋、尤賀｜設計者學校：中原大學 建築學系｜指導老師：徐昌志 老師',
  },
  {
    title: '釋放空白區－大街廓計畫',
    year: '2023',
    description: '設計者、非台灣國家：陳文中｜設計者學校：中原大學 建築學系｜指導老師：黃俊銘 老師',
  },
];

function OnlineExhibitionPage({ pageList }: Props) {
  return (
    <>
      <SEO title="網路預展 Untitled" description="首都之心 城中轉正：網路預展" />
      <div className="online-exhibition">
        <Header />
        <div className="mx-5">

          <div className="py-10 text-center">
            <h1>網路預展</h1>
            <h1 className="h2">Untitled</h1>
          </div>
          <TabContainer defaultValue="online">
            <TabList>
              <TabTriggerContainer>
                <TabTrigger value="online" >評審推薦優秀作品</TabTrigger>
                <TabTrigger value="invited" >特別邀請作品+歷年畢業設計作品</TabTrigger>
              </TabTriggerContainer>
              <div className="py-10">
                <p className='mb-2 text-sm'>
                  「首都之心，城中轉正：中正紀念堂園區新願景概念競圖」，自去年歷經公開徵件、初審入圍、決審評選，可看見來自多元背景的年輕世代與空間專業者熱烈參與，是一個嘗試還原和發現的思辨過程，藉由重新梳理與詮釋空間，重啟對於都市的發聲。
                </p>
                <p className='mb-2 text-sm'>
                  本成果展覽延續競圖「公共參與」的理念，所有參賽作品皆參與展出，尤其獲得評審推薦獎的10件作品均富巧思與深遠意涵，在獲獎後也繼續發展作品的細部設計和論述、製作模型和影片，以更完整的方案呈現在本展覽中。
                </p>
                <p className='mb-2 text-sm'>
                  此外，策展單位再邀請12件作品一起展出：其中10件為歷年來國內外大學以中正紀念堂為基地之畢業設計作品，2件為邀請國內外2組專業者提出之作品。希望藉此提供大眾更多思考的方向，也促進專業領域的交流。
                </p>
                <p className='text-sm'>
                  在公眾展期開始前，先行於此平台釋出上述提及的10件評審推薦獎作品，以及歷年畢業設計作品10件、特邀組作品2件。在親臨現場之前，一窺各種想像紛呈，展開對於中正紀念堂未來輪廓的想像。
                </p>
              </div>
              <TabContent value="online" className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {pageList.map((page) => <OnlineExhibition key={page.id} work={page} />)}
              </TabContent>
              <TabContent value="invited" className="mb-5">
                <h2 className="my-8 text-center">特別邀請作品</h2>
                <ul className="w-full mb-5 border-t border-default">
                  {INVITED_WORKS_1.map(({ title, description }) => (
                    <li className="px-2 py-3 border-b border-default" key={title}>
                      <p className="flex flex-wrap items-baseline justify-between w-full mb-1 text-lg">
                        {title}
                      </p>
                      <p className="text-sm font-thin text-gray-500">{description}</p>
                    </li>
                  ))}
                </ul>
                <h2 className="my-8 text-center">歷年畢業設計作品</h2>
                <ul className="w-full border-t border-default">
                  {INVITED_WORKS_2.map(({ title, year, description }) => (
                    <li className="px-2 py-3 border-b border-default" key={title}>
                      <p className="flex flex-wrap items-baseline justify-between w-full mb-1 text-lg">
                        {title}
                        <span className="w-full text-sm text-gray-500 sm:text-xs sm:w-fit md:w-fit lg:w-fit">{year}</span>
                      </p>
                      <p className="text-sm font-thin text-gray-500">{description}</p>
                    </li>
                  ))}
                </ul>
              </TabContent>
            </TabList>
          </TabContainer>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const pageList = await getPageList<OnlineExhibitionInformation>(process.env.NOTION_ONLINE_EXHIBITION_DB_ID || '');
    const pageListWithFilter = pageList.filter((page) => page['狀態'] === '已發布');
    // TODO: Sort

    return {
      props: {
        pageList: JSON.parse(JSON.stringify(pageListWithFilter)),
      },
      revalidate: 60,
    };
  } catch {
    return {
      props: {
        pageList: {
          student: [],
          open: [],
        },
      },
      revalidate: 60,
    };
  }
};

export default OnlineExhibitionPage;
