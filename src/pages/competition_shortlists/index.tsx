import axios from 'axios';
import Header from 'components/Header';
import SEO from 'components/SEO';
import {
  TabContent, TabTrigger, TabTriggerContainer, TabContainer, TabList,
} from 'components/Tabs';
import dayjs from 'dayjs';
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
    <>
      <SEO title="最新消息 News" description="首都之心 城中轉正：中正紀念堂園區新願景概念競圖 第一階段入圍作品。" />
      <div className="shortlist">
        <Header />
        <div className="mx-5">

          <div className="py-10 text-center">
            <h1>初審入圍名單一覽</h1>
            <h1 className="h2">Competition Shortlists</h1>
          </div>
          <TabContainer defaultValue="student">
            <TabList>
              <TabTriggerContainer>
                <TabTrigger value="student" >學生組</TabTrigger>
                <TabTrigger value="open" >社會組</TabTrigger>
              </TabTriggerContainer>
              <div className="py-10">
                <p className='text-sm'>
                  「中正紀念堂園區新願景概念競圖」，自2022.7.1起公開徵件，至11/10交件截止日止，共有學生組97件、社會組45件符合交件規格之作品進入評選，其中有15件海外作品。初審評審委員在所有作品中，挑出學生組、社會組優選作品各15件，這30組入圍團隊，需在2023.2.15前精進作品，爭取決選佳績。
                  <br />
                  評審委員會與主辦單位向這一路上所有的參與人致謝，你們的熱情參與，讓我們有機會用空間為本案找解方、為競圖的議題擴大溝通與對話的可能。
                </p>
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
    </>
  );
}

export const getStaticProps = async () => {
  if (dayjs().isBefore(dayjs('2022-12-01T12:00:00.000+08:00'))) return { notFound: true };
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
