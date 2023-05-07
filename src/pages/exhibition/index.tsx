import Header from 'components/Header';
import React from 'react';
import {
  TabContent, TabTrigger, TabTriggerContainer, TabContainer, TabList,
} from 'components/Tabs';
import Work from 'components/Work';
import { getPageList } from 'lib/notion';
import { NotionPageData, ExhibitionInformation } from 'type';
import SEO from 'components/SEO';

type Props = {

  pageList: {
    student: NotionPageData<ExhibitionInformation>[]
    open: NotionPageData<ExhibitionInformation>[]
  }
};

function Exhibition({ pageList }: Props) {
  return (
    <>
      <SEO title="入圍作品及優勝名單 Competition Finalists & Winners" description="首都之心 城中轉正：中正紀念堂園區新願景概念競圖 入圍作品及優勝名單" />
      <div className="exhibition">
        <Header className="from-exhibition" />
        <div className="mx-5">

          <div className="py-10 text-center">
            <h1>入圍作品及優勝名單</h1>
            <h1 className="h2">Competition Finalists & Winners</h1>
          </div>
          <TabContainer defaultValue="student">
            <TabList>
              <TabTriggerContainer>
                <TabTrigger value="student" >學生組</TabTrigger>
                <TabTrigger value="open" >社會組</TabTrigger>
              </TabTriggerContainer>
              <div className="py-10">
                <p className='mb-2 text-sm'>
                  本次競圖活動，我們採用兩階段性競賽的方式，事先公布評審名單，第一階段採單盲（將作品匿名去識別化）評選方法，堅守利益迴避原則，讓作者們不依其學校、背景、姓名，影響評審的判斷，從作品本身的概念和創意，來爭取評審們的優先推薦。
                </p>
                <p className='mb-2 text-sm'>
                  入圍第一階段的團隊共有社會組及學生組各十五組，分別獲得15萬元的工作獎金，支持他們更進一步深化設計，並且準備口頭報告，在第二階段決選的公開直播舞臺上，與評審們互動，爭取進入下一階段的門票。
                </p>
                <p className='mb-2 text-sm'>
                  為了保護每個團隊的原創構想，直到最後決審的直播現場才完整的公開入圍團隊的作品細節。第二階段決審選出的社會組及學生組各5組優勝作品的團隊，可以再獲得各30萬元的工作獎金，繼續發展作品的細部設計和論述、製作模型和影片。這三十組入圍者以及最後的優勝團隊作品，各有其創意和巧思，未來也將一同再實體的成果展覽中呈現。
                </p>
                <p className='text-sm'>
                  本次競賽的主要目標是促進社會的對話與交流，最後選出的優勝作品並不分名次順序，希望可以開拓社會各界更多的想像空間。
                </p>
              </div>
              <TabContent value="student" className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {pageList.student.map((page) => <Work key={page.id} work={page} />)}
              </TabContent>
              <TabContent value="open" className="grid grid-flow-row grid-cols-1 mb-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {pageList.open.map((page) => <Work key={page.id} work={page} />)}
              </TabContent>
            </TabList>
          </TabContainer>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const pageList = await getPageList<ExhibitionInformation>(process.env.NOTION_WORK_DB_ID || '');
    const pageListWithFilter = pageList.filter((page) => page['狀態'] === '已發布');
    const pageListWithType: { [key: string]: NotionPageData<ExhibitionInformation>[] } = {
      student: [],
      open: [],
    };

    pageListWithFilter.forEach((page) => {
      switch (page['種類']) {
        case '社會組':
          pageListWithType.open.push(page);
          break;
        case '學生組':
          pageListWithType.student.push(page);
          break;
        default:
          break;
      }
    });

    return {
      props: {
        pageList: JSON.parse(JSON.stringify(pageListWithType)),
      },
      revalidate: 10,
    };
  } catch {
    return {
      props: {
        pageList: {
          student: [],
          open: [],
        },
      },
      revalidate: 10,
    };
  }
};

export default Exhibition;
