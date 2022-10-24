import el from '@master/style-element.react';
import Activity from 'components/Activity';
import Header from 'components/Header';
import ScrollNav, { ScrollNavLink } from 'components/ScrollNav';
import dayjs from 'dayjs';
import { getPageList } from 'lib/notion';
import React, { useState } from 'react';
import { ActivityInformation, NotionPageData } from 'type';

type Props = {
  pageList: { [key: string]: NotionPageData<ActivityInformation>[] }
};

const ACTIVITY_TYPE = ['tour', 'lecture', 'workshop', 'film', 'forum'];

const NavButton = el.button`px-2 py-1 transition-all duration-200 border-b-4 border-transparent shrink-0 hover:border-primary small whitespace-nowrap`;

function News({ pageList }: Props) {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="activity">
      <Header />
      <div className="mx-5">

        <div className="py-10 text-center">
          <h1>想像中正紀念堂的100種方式</h1>
          <h1 className="h2">Public Participation</h1>
        </div>

        <ScrollNav>
          <ScrollNavLink to="tour">
            導覽
          </ScrollNavLink>
          <ScrollNavLink to="lecture">
            講座
          </ScrollNavLink>
          <ScrollNavLink to="workshop">
            工作坊
          </ScrollNavLink>
          <ScrollNavLink to="film">
            影展
          </ScrollNavLink>
          <ScrollNavLink to="forum">
            論壇
          </ScrollNavLink>
          <NavButton to="sign_up" onClick={() => setSignUp((s) => !s)} className={signUp ? 'text-primary border-primary' : ''}>
            開放報名中
          </NavButton>
        </ScrollNav>
        <div className="py-10">
          <p className='text-sm'>對於中正紀念堂園區的新願景想像，每個人都有至少一種觀點，人與人的相遇，還會產生新的觀點，在反覆交流、互動中，又能碰撞出更多的可能。 想像中正紀念堂的100種方式，匯集了數場靜態和動態的事件，讓更多人在此過程中找到自身與中正紀念堂連結的可能。如果你時常思索：該如何想像中正紀念堂？該如何描述中正紀念堂？該如何再詮釋中正紀念堂？那麼我們想和你分享以下幾種「想像中正紀念的方式」。</p>
        </div>
        <div className="flex flex-wrap mb-5">
          {ACTIVITY_TYPE.map((type) => pageList[type].map((page, index) => <Activity key={page.id} id={index === 0 ? type : undefined} activity={page} />))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const pageList = await getPageList<ActivityInformation>(process.env.NOTION_ACTIVITY_DB_ID || '');
    const pageListWithFilter = pageList.filter((page) => page['狀態'] === '已發布');
    const pageListWithType: { [key: string]: NotionPageData<ActivityInformation>[] } = {
      tour: [],
      lecture: [],
      workshop: [],
      film: [],
      forum: [],
      signUp: [],
    };

    pageListWithFilter.forEach((page) => {
      switch (page['種類']) {
        case '導覽':
          pageListWithType.tour.push(page);
          break;
        case '工作坊':
          pageListWithType.workshop.push(page);
          break;
        case '影展':
          pageListWithType.film.push(page);
          break;
        case '論壇':
          pageListWithType.forum.push(page);
          break;
        case '講座':
          pageListWithType.lecture.push(page);
          break;
        default:
          break;
      }
      if (dayjs(page['報名截止日期']).isAfter(dayjs())) {
        pageListWithType.signUp.push(page);
      }
    });

    return {
      props: {
        pageList: JSON.parse(JSON.stringify(pageListWithType)),
      },
    };
  } catch {
    return {
      props: { pageList: [] },
    };
  }
};

export default News;
