import { CardContainer } from 'components/Card';
import Header from 'components/Header';
import Info from 'components/Info';
import SEO from 'components/SEO';
import { getPageList } from 'lib/notion';
import React from 'react';
import { NewsInformation, NotionPageData } from 'type';

type Props = {
  pageList: NotionPageData<NewsInformation>[]
};

function News({ pageList }: Props) {
  return (
    <>
      <SEO title="最新消息 News" description="最新競圖消息、最新想像中正紀念堂的100種方式公告。" />
      <div className="news">
        <Header />
        <div className="mx-5">

          <div className="py-10 text-center">
            <h1>最新消息</h1>
            <h1 className="h2">News</h1>
          </div>
          <CardContainer>
            {pageList.map((page) => <Info key={page.id} information={page} />)}
          </CardContainer>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const pageList = await getPageList(process.env.NOTION_NEWS_DB_ID || '');
    const pageListWithFilter = pageList.filter((page) => page['狀態'] === '已發布');

    return {
      props: {
        pageList: JSON.parse(JSON.stringify(pageListWithFilter)),
      },
      revalidate: 10,
    };
  } catch {
    return {
      props: { pageList: [] },
      revalidate: 10,
    };
  }
};

export default News;
