import Header from 'components/Header';
import Info from 'components/Info';
import { getPageList } from 'lib/notion';
import React from 'react';

type NewsInformation = {
  id: string
  Title: string
  '狀態': string
  '活動日期': string
  '發布日期': string
  '摘要': string
  cover: {
    url: string
  }
};

type Props = {
  pageList: NewsInformation[]
};

function News({ pageList }: Props) {
  return (
    <div className="news">
      <Header />
      <div className="mx-5">

        <div className="py-10 text-center">
          <h1>最新消息</h1>
          <h1 className="h2">News</h1>
        </div>
        <div className="flex flex-wrap mb-5">
          {pageList.map((page) => <Info key={page.id} information={page} />)}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const pageList = await getPageList<NewsInformation>(process.env.NOTION_NEWS_DB_ID || '');
    const pageListWithFilter = pageList.filter((page) => page['狀態'] === '已發布');

    return {
      props: {
        pageList: JSON.parse(JSON.stringify(pageListWithFilter)),
      },
    };
  } catch {
    return {
      props: { pageList: [] },
    };
  }
};

export default News;
