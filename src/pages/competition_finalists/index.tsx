import Header from 'components/Header';
import {
  TabContent, TabTrigger, TabTriggerContainer, TabContainer, TabList,
} from 'components/Tabs';
import Work from 'components/Work';
import { getPageList } from 'lib/notion';
import React from 'react';
import { NotionPageData, WorkInformation } from 'type';

type Props = {
  pageList: {
    student: NotionPageData<WorkInformation>[]
    open: NotionPageData<WorkInformation>[]
  }
};

function CompetitionFinalists({ pageList }: Props) {
  return (
    <div className="shortlist">
      <Header />
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
            <TabContent value="student" className="flex flex-wrap">
              {pageList.student.map((page) => <Work key={page.id} work={page} />)}
            </TabContent>
            <TabContent value="open" className="flex flex-wrap mb-5">
              {pageList.open.map((page) => <Work key={page.id} work={page} />)}
            </TabContent>
          </TabList>
        </TabContainer>
      </div>
    </div>
  );
}

const shuffleArray = (arr: NotionPageData<WorkInformation>[]) => arr.sort(() => 0.5 - Math.random());

export const getStaticProps = async () => {
  try {
    const pageList = await getPageList<WorkInformation>(process.env.NOTION_WORK_DB_ID || '');
    const pageListWithFilter = shuffleArray(pageList.filter((page) => page['狀態'] === '已發布'));
    const pageListWithType: { [key: string]: NotionPageData<WorkInformation>[] } = {
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

export default CompetitionFinalists;
