import Header from 'components/Header';
import { getPageList } from 'lib/notion';
import { GetStaticPropsContext } from 'next';
import React from 'react';

type NewsInformation = {
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
    <div>
      <Header className="from-news" />
    </div>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  if (!id) return { notFound: true };

  try {
    const pageList = await getPageList<NewsInformation>(process.env.NOTION_NEWS_DB_ID || '');
    console.log(pageList);
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
