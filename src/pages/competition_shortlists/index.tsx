import axios from 'axios';
import Header from 'components/Header';
import {
  TabContent, TabTrigger, TabTriggerContainer, TabContainer, TabList,
} from 'components/Tabs';
import Link from 'next/link';
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

function CompetitionShortlists({ pageList }: Props) {
  return (
    <div className="shortlist">
      <Header />
      <div className="mx-5">

        <div className="py-10 text-center">
          <h1>入圍作品一覽</h1>
          <h1 className="h2">Competition Shortlists</h1>
        </div>
        <TabContainer defaultValue="student">
          <TabList>
            <TabTriggerContainer>
              <TabTrigger value="student" >學生組</TabTrigger>
              <TabTrigger value="open" >社會組</TabTrigger>
            </TabTriggerContainer>
            <div className="py-10">
              <p className='text-sm'>對於中正紀念堂園區的新願景想像，每個人都有至少一種觀點，人與人的相遇，還會產生新的觀點，在反覆交流、互動中，又能碰撞出更多的可能。 想像中正紀念堂的100種方式，匯集了數場靜態和動態的事件，讓更多人在此過程中找到自身與中正紀念堂連結的可能。如果你時常思索：該如何想像中正紀念堂？該如何描述中正紀念堂？該如何再詮釋中正紀念堂？那麼我們想和你分享以下幾種「想像中正紀念的方式」。</p>
              <div className="mt-6 text-center">
                <Link href="/中正紀念堂園區新願景概念競圖初審入圍名單發布記者會新聞稿.pdf">
                  <button className="w-full max-w-sm py-2 transition-all ease-in-out border-2 rounded-full bg-primary hover:scale-105 border-default">
                    入圍名單發布記者會新聞稿
                  </button>
                </Link>
              </div>
            </div>
            <TabContent value="student" className="w-full">
              <ul className="w-full border-t border-default">
                {pageList.student.map((work, index) => (
                  <li className="px-2 py-3 border-b border-default" key={index}>
                    <p className="flex flex-wrap items-baseline justify-between w-full mb-1 text-lg">
                      {work['團隊名稱']}
                      {work['指導老師'] && <span className="w-full text-sm text-gray-500 sm:text-xs sm:w-fit md:w-fit lg:w-fit">指導老師：{work['指導老師']}</span>}
                    </p>
                    <p className="text-sm font-thin text-gray-500">成員：{work['團隊成員與學校']}</p>
                  </li>
                ))}
              </ul>
            </TabContent>
            <TabContent value="open" className="w-full">
              <ul className="w-full border-t border-default">
                {pageList.open.map((work, index) => (
                  <li className="px-2 py-3 border-b border-default" key={index}>
                    <p className="flex flex-wrap items-baseline justify-between w-full mb-1 text-lg">
                      {work['團隊名稱']}
                    </p>
                    <p className="text-sm font-thin text-gray-500">成員：{work['團隊成員與單位']}</p>
                  </li>
                ))}
              </ul>
            </TabContent>
          </TabList>
        </TabContainer>
        <p className="mt-5 text-sm font-thin text-center text-gray-500">以上順序按照團隊筆畫排序，無關名次</p>
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

export default CompetitionShortlists;
