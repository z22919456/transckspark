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
      <SEO title="競圖成果展覽 Exhibition" description="" />
      <div className="exhibition">
        <Header className="from-exhibition" />
        <div className="mx-5">

          <div className="py-10 text-center">
            <h1>入圍作品一覽</h1>
            <h1 className="h2">Competition Finalists</h1>
          </div>
          <TabContainer defaultValue="student">
            <TabList>
              <TabTriggerContainer>
                <TabTrigger value="student" >學生組</TabTrigger>
                <TabTrigger value="open" >社會組</TabTrigger>
              </TabTriggerContainer>
              <div className="py-10">
                <p className='text-sm'>缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案缺少此處文案</p>
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

export const getStaticProps = async () => {
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
