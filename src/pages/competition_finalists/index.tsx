import axios from 'axios';
import Header from 'components/Header';
import {
  TabContent, TabTrigger, TabTriggerContainer, TabContainer, TabList,
} from 'components/Tabs';
import React from 'react';
import {
  WorkOpenInformation, WorkStudentInformation,
} from 'type';

type Props = {
  pageList: {
    student: WorkStudentInformation[]
    open: WorkOpenInformation[]
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
            <TabContent value="student" className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {/* {pageList.student.map((page) => <Work key={page.id} work={page} />)} */}
            </TabContent>
            <TabContent value="open" className="grid grid-flow-row grid-cols-1 mb-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {/* {pageList.open.map((page) => <Work key={page.id} work={page} />)} */}
            </TabContent>
          </TabList>
        </TabContainer>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const openList = await axios.get<WorkOpenInformation[]>(`https://notion-api.splitbee.io/v1/table/${process.env.NOTION_WORK_OPEN_DB_ID}`);
    const studentList = await axios.get<WorkOpenInformation[]>(`https://notion-api.splitbee.io/v1/table/${process.env.NOTION_WORK_STUDENT_DB_ID}`);
    const studentListWithFilter = studentList.data.filter((page) => page['發布狀態'] === '已發布');
    const openListWithFilter = openList.data.filter((page) => page['發布狀態'] === '已發布');
    const pageListWithType = {
      student: studentListWithFilter,
      open: openListWithFilter,
    };

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
