import Header from 'components/Header';
import SEO from 'components/SEO';
import { getPageList } from 'lib/notion';
import React from 'react';
import { UnnamedInformation, NotionPageData } from 'type';
import YTCard from 'components/YTCard';

type Props = {
  pageList: NotionPageData<UnnamedInformation>[]
};

function EndorsementVideo({ pageList }: Props) {
  return (
    <>
      <SEO title="名人推薦影片 Endorsement Videos" description="邀請名人推薦展覽" />
      <div className="video">
        <Header />
        <div className="mx-5">

          <div className="py-10 text-center">
            <h1>名人推薦影片</h1>
            <h1 className="h2">Endorsement Video</h1>
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
    const pageListWithFilter = pageList.filter((page) => page['狀態'] === '已發布' && page['類型'] === '名人推薦影片');

    return {
      props: {
        pageList: JSON.parse(JSON.stringify(pageListWithFilter)),
      },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: { pageList: [] },
      revalidate: 60,
    };
  }
};

export default EndorsementVideo;
