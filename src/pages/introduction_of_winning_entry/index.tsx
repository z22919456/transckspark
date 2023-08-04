import Header from 'components/Header';
import SEO from 'components/SEO';
import { getPageList } from 'lib/notion';
import React from 'react';
import { UnnamedInformation, NotionPageData } from 'type';
import YTCard from 'components/YTCard';

type Props = {
  pageList: NotionPageData<UnnamedInformation>[]
};

function IntroductionOfWinningEntry({ pageList }: Props) {
  return (
    <>
      <SEO title="優勝作品介紹與團隊訪談 Introduction Of Winning Entry" description="優勝作品介紹與團隊訪談" />
      <div className="introduction">
        <Header />
        <div className="mx-5">

          <div className="py-10 text-center">
            <h1>優勝作品介紹與團隊訪談</h1>
            <h1 className="h2">Introduction Of Winning Entry</h1>
          </div>
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {pageList.map((page) => <YTCard key={page.id} data={page} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const pageList = await getPageList(process.env.NOTION_VIDEO_AND_INTRO_DB_ID || '');
    const pageListWithFilter = pageList.filter((page) => page['狀態'] === '已發布' && page['類型'] === '優勝作品介紹與團隊訪談');

    return {
      props: {
        pageList: JSON.parse(JSON.stringify(pageListWithFilter)),
      },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: { pageList: [] },
      revalidate: 5,
    };
  }
};

export default IntroductionOfWinningEntry;
