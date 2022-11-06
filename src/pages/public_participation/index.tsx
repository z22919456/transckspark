import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import el from '@master/style-element.react';
import Activity from 'components/Activity';
import { CardContainer } from 'components/Card';
import Header from 'components/Header';
import ScrollNav, { } from 'components/ScrollNav';
import SEO from 'components/SEO';
import dayjs from 'dayjs';
import { getPageList } from 'lib/notion';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityInformation, NotionPageData } from 'type';
import { faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import BackToTop from 'components/BackToTop';

type Props = {
  pageList: NotionPageData<ActivityInformation>[]
};

const ACTIVITY_TYPE = ['tour', 'lecture', 'workshop', 'film', 'forum'];

const NavButton = el.button`px-2 py-1 text-xs transition-all duration-200 border rounded-full border-default shrink-0 hover:bg-primary hover:text-default hover:border-default whitespace-nowrap`;

function News({ pageList }: Props) {
  const signUpPageList = useMemo(() => pageList.filter((p) => dayjs(p['報名截止日期']).isAfter(dayjs())), [pageList]);

  const [onlyShowSignUp, setOnlySignUp] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);

  const [list, setList] = useState(pageList);

  useEffect(() => {
    const data = onlyShowSignUp ? signUpPageList : pageList;
    if (filter.length === 0) setList(data);
    else setList(data.filter((p) => filter.find((f) => f === p['種類'])));
  }, [filter, onlyShowSignUp]);

  const handleFilterChange = (key: string) => {
    setFilter((state) => {
      if (state.find((s) => s === key)) {
        return state.filter((s) => s !== key);
      }
      return [...state, key];
    });
  };

  return (
    <>
      <SEO title="想像中正紀念堂的100種方式 Public Participation" />
      <div className="activity">
        <Header />
        <div className="mx-5">

          <div className="py-10 text-center">
            <h1>想像中正紀念堂的100種方式</h1>
            <h1 className="h2">Public Participation</h1>
          </div>

          <div className="'md:sticky relative space-x-3  md:bg-white z-10 top-0 flex flex-wrap justify-center py-3 border-b border-black w-full gap-3'">
            <NavButton onClick={() => handleFilterChange('導覽')} className={filter.find((f) => f === '導覽') && 'text-primary !border-primary'}>
              導覽
            </NavButton>
            <NavButton onClick={() => handleFilterChange('講座')} className={filter.find((f) => f === '講座') && 'text-primary !border-primary'}>
              講座
            </NavButton>
            <NavButton onClick={() => handleFilterChange('工作坊')} className={filter.find((f) => f === '工作坊') && 'text-primary !border-primary'}>
              工作坊
            </NavButton>
            <NavButton onClick={() => handleFilterChange('影展')} className={filter.find((f) => f === '影展') && 'text-primary !border-primary'}>
              影展
            </NavButton>
            <NavButton onClick={() => handleFilterChange('論壇')} className={filter.find((f) => f === '論壇') && 'text-primary !border-primary'}>
              論壇
            </NavButton>
            <NavButton onClick={() => setOnlySignUp((s) => !s)} className={onlyShowSignUp ? 'text-primary !border-primary' : ''}>
              開放報名中
            </NavButton>
          </div>
          <div className="py-10 border-b border-default">
            <p className='text-sm'>對於中正紀念堂園區的新願景想像，每個人都有至少一種觀點，人與人的相遇，還會產生新的觀點，在反覆交流、互動中，又能碰撞出更多的可能。 想像中正紀念堂的100種方式，匯集了數場靜態和動態的事件，讓更多人在此過程中找到自身與中正紀念堂連結的可能。如果你時常思索：該如何想像中正紀念堂？該如何描述中正紀念堂？該如何再詮釋中正紀念堂？那麼我們想和你分享以下幾種「想像中正紀念的方式」。</p>
          </div>
          <div>
            {list.map((page) => <Activity onlySignUp={onlyShowSignUp} key={page.id} activity={page} />)}
          </div>
          <BackToTop />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const pageList = await getPageList<ActivityInformation>(process.env.NOTION_ACTIVITY_DB_ID || '');
    const pageListWithFilter = pageList.filter((page) => page['狀態'] === '已發布').sort((i, j) => (dayjs(i['活動日期']).isAfter(dayjs(j['活動日期'])) ? -1 : 1));

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
