import placeholder from 'components/assets/imagePlaceholderBase64';
import { CardContainer } from 'components/Card';
import Header from 'components/Header';
import Judge from 'components/Judge';
import ScrollNav, { ScrollNavLink } from 'components/ScrollNav';
import SEO from 'components/SEO';
import { chairman, finalJudges, firstJudges } from 'data/judgesData';
import Image from 'next/image';
import React from 'react';

function Judges() {
  return (
    <>
      <SEO title="評審委員  The Jury" description="本競圖採二階段評審，由賀陳旦先生擔任評審團主席。初選評審：林芳慧、侯志仁、郭瓊瑩、陳翠蓮、曾旭正、賀陳旦、黃海鳴、黃聲遠、詹偉雄、蔡詩萍；決選評審：Andres Lepik、王明蘅、林曼麗、林靜娟、曾成德、曾旭正、賀陳旦、黃丞儀、藤森照信。" />
      <div className="judge">
        <Header />
        <div className="mx-5">
          <ScrollNav className="bg-transparent">
            <div className="flex items-baseline w-full flex-nowrap">
              <p className="py-1 ml-5 mr-auto text-xs text-gray-600 whitespace-nowrap">初審</p>
              <div className="flex flex-wrap w-full ml-5">
                {firstJudges.map(({ name, id, ...judge }) => (
                  <ScrollNavLink key={id} to={judge?.chairman ? 'chairman' : `first-${id}`} className="w-auto px-0 mr-1 text-xs" >{name}</ScrollNavLink>
                ))}
              </div>
            </div>
            <div className="flex items-baseline w-full flex-nowrap">
              <p className="py-1 ml-5 mr-auto text-xs text-gray-600 whitespace-nowrap">決審</p>
              <div className="flex flex-wrap w-full ml-5">
                {finalJudges.map(({ name, id, ...judge }) => (
                  <ScrollNavLink key={id} to={judge?.chairman ? 'chairman' : `final-${id}`} className="w-auto px-0 ml-1 text-xs" >{name}</ScrollNavLink>
                ))}
              </div>
            </div>
          </ScrollNav>

          <div className="py-10 border-b border-default">
            <p className="mb-2 text-left">評審團的話</p>
            <p className='text-sm'>我們很榮幸參與這一件深具歷史意義的工作。競圖徵件尚未開始就先公布評審名單，代表我們的承諾，誠心邀請國人熱情參與。誠如本計畫徵件名稱，這ㄧ次邀稿，不是一般都市計畫檢討土地利用、也不是大學建築系所聯合設計展，是要秉承近十年來國家推動轉型正義大計，在目前中正紀念堂這個案址形塑空間新願景。這個願景有賴多元且多樣的溝通，過去有許多回合訪談和論壇，本案邀稿希望用視覺性體驗，讓社會再一次溝通學習。評審委員願意協助產生最優秀的空間設計，引導社會公論，促成本案新世代的空間主張。</p>
          </div>

          <div id="chairman" className="py-5">
            <div className="flex justify-between text-xs" id="chairman">
              <p>評審團主席＆初、決審評審</p>
              <p>{chairman.engName}</p>
            </div>
            <h2 className="py-10 text-lg text-center">{chairman.name}</h2>

            <div className="flex flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
              {/* sm:flex-nowrap md:flex-wrap xl:flex-nowrap */}
              <div className="relative w-full mb-5 sm:mr-5 sm:mb-0 md:mr-0 md:mb-5 lg:mb-0 lg:mr-5 aspect-video">
                <Image placeholder="blur" blurDataURL={placeholder} src={chairman.image} layout="fill" objectFit="cover" alt={chairman.name} />
              </div>

              <div className="w-full ml-0 sm:ml-5 md:ml-0 lg:ml-5">
                <p className="text-xs">{chairman.information}</p>
              </div>
            </div>
          </div>
          <CardContainer>
            {firstJudges.filter((judge) => !judge?.chairman).map((judge) => (<Judge key={judge.id} {...judge} />))}
            {finalJudges.filter((judge) => !judge?.chairman).map((judge) => (<Judge key={judge.id} {...judge} final />))}
          </CardContainer>
        </div>

      </div>
    </>
  );
}

export default Judges;
