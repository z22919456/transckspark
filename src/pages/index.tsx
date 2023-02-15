import Divider from 'components/Divider';
import Header from 'components/Header';
import Section from 'components/Section';
import Image from 'next/image';
import React from 'react';

import SEO from 'components/SEO';
import about00Img from 'images/about/00.jpg';
import about02Img from 'images/about/04.jpg';
import about03Img from 'images/about/about-03.jpg';
import about04Img from 'images/about/about-04.jpg';
import placeholder from 'components/assets/imagePlaceholderBase64';
import ScrollNav, { ScrollNavLink } from '../components/ScrollNav';

function About() {
  return (
    <>
      <SEO />
      <div className="about">
        <Header className="from-primary" />

        <div className="py-10 text-center">
          <h1> 關於首都之心 城中轉正</h1>
          <h1 className="h2">About the Project</h1>
        </div>

        <div className="px-5">
          <ScrollNav>
            <ScrollNavLink to="about">
              活動緣起
            </ScrollNavLink>
            <ScrollNavLink to="base">
              中正紀念堂基地脈絡
            </ScrollNavLink>
            <ScrollNavLink to="event">
              中正紀念堂大事記
            </ScrollNavLink>
            <ScrollNavLink to="meaning">
              轉型的意義
            </ScrollNavLink>
            <ScrollNavLink to="workgroup">
              工作團隊
            </ScrollNavLink>
          </ScrollNav>
          <Section id="about" >
            <h2 className="py-12 text-center">活動緣起｜民間發起的紙上概念競圖</h2>
            <p>首都之心，城中轉正：中正紀念堂園區新願景概念競圖，由台灣現代建築學會、中華民國都市設計學會、中華民國景觀學會國內三大空間規劃設計專業學會共同發起。透過競圖徵件，鼓勵社會將論述具象化；經由公眾參與活動，促進社會溝通。此競圖與系列活動，以 「公共參與」 為理念及方法，在嚴謹公平的程序中，聚焦規劃專業，由下而上動員空間專業界與社會大眾，激發想像力和創造力，參與都市公共空間改造過程。競圖徵件期間，搭配系列公共論壇、講座、工作坊、成果展覽，期待打開更多的對話場合、帶動社會進一步討論，從文字進展到概念，從論述具象為圖面，凝聚社會共識，推動轉型正義的空間工程。</p>
            <div className="w-full relative aspect-[1.54] mt-5">
              <Image placeholder="blur" blurDataURL={placeholder} src={about02Img} layout="fill" objectFit='contain' alt="活動主視覺，設計：永真急制 Workshop" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <p className="small text-default/50">活動主視覺，設計：永真急制 Workshop</p>
          </Section>
          <Section id="base" >
            <h2 className="py-12 text-center">中正紀念堂基地脈絡</h2>
            <p>中正紀念堂園區在清治時期為營邊段，是屯兵之地。日治時期是重要營區，鎮壓霧社事件之山砲部隊就設立於此。戰後仍延續軍事用途，設聯勤總司令部、陸軍總司令部、憲兵司令部等機關。</p>
            <br />
            <p>1970年代市府欲進行土地開發營邊段計畫，規劃高層飯店、會展中心、百貨商場，但因決定興建中正紀念堂而告終。</p>
            <br />
            <p>1975年進行中正紀念堂公開徵圖，設計要點：清楚表達「中國文化」的精神、創造新穎的設計、莊嚴獨特的風格，同時涵入現代工程技術。</p>
            <br />
            <div className="w-full relative aspect-[1.54] mt-5">
              <Image placeholder="blur" blurDataURL={placeholder} src={about00Img} layout="fill" objectFit='contain' alt="中正紀念堂園區在1903年後（日治時期間），曾是台灣步兵第一聯隊駐紮地。（中央研究院臺灣史研究所典藏、引用自開放博物館）" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <p className="small text-default/50">中正紀念堂園區在1903年後（日治時期間），曾是台灣步兵第一聯隊駐紮地。（中央研究院臺灣史研究所典藏、引用自開放博物館）</p>
          </Section>
          <Section id="event" >
            <h2 className="py-12 text-center">中正紀念堂大事記</h2>
            <div className="text-center">
              <p>1885</p><p>清朝軍營定海正營</p><Divider />
              <p>1903</p><p>台灣步兵第一聯隊第一大隊建物完工</p><Divider />
              <p>1905</p><p>台灣軍山砲隊駐地</p><Divider />
              <p>1957</p><p>憲兵司令部遷入</p><Divider />
              <p>1971</p><p>經建會擬建營邊段商業經貿中心</p><Divider />
              <p>1975</p><p>蔣介石過世，進行中正紀念堂公開競圖。總共收到43件作品，經評選選出5件進行複審與競圖</p><Divider />
              <p>1976.07.07</p><p>決議錄取和睦建築師事務所楊卓成建築師之設計</p><Divider />
              <p>1976.10.31</p><p>舉行紀念堂破土典禮</p><Divider />
              <p>1977.12.01</p><p>中正紀念堂正式動工，結構部分工程先行開工</p><Divider />
              <p>1978.07.12</p><p>籌建小組第15次委員會議，決議正面牌樓高度30公尺；圍牆高度6公尺，採用迴廊及中國燈籠窗樣式</p><Divider />
              <p>1979.01.11-1980.03.20</p><p>正面牌樓、側牌樓、迴廊、角亭工程</p><Divider />
              <p>1980.03.31</p><p>中正紀念堂籌建竣工</p><Divider />
              <p>1980.04.04</p><p>中正紀念堂落成典禮</p><Divider />
              <p>1980.04.05</p><p>中正紀念堂正式開放參觀</p><Divider />
              <p>1980.07.01</p><p>「中正紀念堂管理處」成立，撥歸台北市政府</p><Divider />
              <p>1986.07.01</p><p>中正紀念堂管理處改隸教育部，正式更名為「國立中正紀念堂管理處」</p><Divider />
              <p>1990.02.10</p><p>「台北燈會」－首次大型節慶在紀念堂舉辦</p><Divider />
              <p>1990</p><p>近六千名大學生集結於紀念堂廣場靜坐抗議，提出「解散國民大會」、「廢除臨時條款」等訴求，史稱「野百合學運」</p><Divider />
              <p>2007</p><p>中正紀念堂改名為「台灣民主紀念館」、 牌樓「大中至正」改為「自由廣場」；文建會公告指定為國定古蹟「台灣民主紀念園區」，範圍包含台灣民主紀念館、民主大道、民主廣場及正面牌樓</p><Divider />
              <p>2008</p><p>「台灣民主紀念館」復名為「中正紀念堂」；中正紀念堂列為文化景觀、歷史建築「中正紀念堂」</p><Divider />
              <p>2008.01.01-02.10</p><p>舉行「民主開門 自由風吹」開幕典禮，首次在銅像大廳辦展，以解構威權空間為主題，展示風箏、學運和社運照片等</p><Divider />
              <p>2017</p><p> 文化部「推動中正紀念堂轉型之社會討論計畫」辦理系列公民參與工作坊、 「想像紀念堂」願景提案等</p><Divider />
              <p>2021</p><p> 促轉會提出「反省威權歷史公園」構想及三大處置原則．委託空間專業團隊提出設計</p><Divider />
              <p>2022</p><p> 民間發起紙上概念競圖「首都之心，城中轉正：中正紀念堂園區新願景概念競圖」</p>
            </div>
          </Section>
          <Section id="meaning" >
            <h2 className="py-12 text-center">轉型的意義</h2>
            <p>公共性成為空間主體，威權意象已悄然鬆動，社會中不同角度與聲音，皆期待此空間的轉變。中正紀念堂園區啟用40年後，最初崇敬緬懷領袖之意，已隨時代變遷而淡化。鬆動空間的是1990年代社會運動，和隨後的藝文活動、各式集會與日常生活使用，多元的意義、觀點、記憶轉化了空間性格，也打開轉型契機。</p>
            <br />
            <p>公共空間是市民生活的據點，也是城市精神的象徵。帶著經年累月的日常使用心得，及美好公共空間的願景，社會對中正紀念堂園區轉型的呼聲此起彼落，不論是從歷史背景、城市中心再發展、當代文化發展路徑、轉型正義、日常生活、社區營造等不同的角度，都期待此空間的轉變。</p>
            <div className="w-full relative aspect-[4/3] mt-5">
              <Image placeholder="blur" blurDataURL={placeholder} src={about03Img} layout="fill" objectFit='contain' alt="國立中正紀念堂管理處提供" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="w-full relative aspect-[4/3] mt-5">
              <Image placeholder="blur" blurDataURL={placeholder} src={about04Img} layout="fill" objectFit='contain' alt="" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <p className="small text-default/50">國立中正紀念堂管理處提供</p>
          </Section>
          <Section id="workgroup" >
            <h2 className="py-12 text-center">工作團隊</h2>
            <h3 className="py-4 font-bold">共同發起單位</h3>
            <p>台灣現代建築學會、中華民國景觀學會、中華民國都市設計學會</p>
            <h3 className="py-4 font-bold">競圖評審委員會</h3>
            <p><b>初審評審 ｜</b> 賀陳旦(主席)、林芳慧、侯志仁、郭瓊瑩、陳翠蓮、曾旭正、黃海鳴、黃聲遠、詹偉雄、蔡詩萍</p>
            <p><b>決審評審 ｜</b> 賀陳旦(主席)、Jolanta Gromadzka、Philip J. Goad、王明蘅、林曼麗、林靜娟、曾成德、曾旭正、黃丞儀 </p>

            <p className="text-sm text-default/60">(主席外依筆畫排列)</p>

            <h3 className="py-4 font-bold"> 競圖執行工作小組 </h3>
            <p><b>召集人 ｜</b> 黃俊銘</p>
            <p><b>執行長 ｜</b> 張維修</p>
            <p><b>策展人 ｜</b> 王俊雄</p>
            <p><b>秘書長 ｜</b> 蔣雅君</p>
            <p><b>統籌執行 ｜</b> 游觀創意策略</p>
            <p><b>團隊 ｜</b> 林孝穎、陳怡廷、王晨宣</p>
            <p><b>美學顧問 ｜</b> 吳漢中</p>
            <p><b>法律顧問 ｜</b> 圓矩法律事務所</p>
            <p><b>美術及網站製作 ｜</b> J.C、Arthur Li</p>
            <p><b>主視覺構成 ｜</b> 永真急制Workshop</p>
            <p><b>印刷 ｜</b> 博創印藝文化事業</p>
          </Section>
        </div>
      </div>
    </>
  );
}

export default About;
