import Button from 'components/Button';
import Divider from 'components/Divider';
import Header from 'components/Header';
import ScrollNav, { ScrollNavLink } from 'components/ScrollNav';
import Section from 'components/Section';
import React from 'react';

function Competition() {
  return (
    <div className="competition">
      <Header />
      <div className="px-5 mb-12">
        <div className="py-10 text-center">
          <h1>競圖徵件</h1>
          <h1 className="h2">Competition</h1>
        </div>
        {/* 時程 */}
        <div className="text-center text-primary">
          <div className="text-white bg-primary">
            <h2><small>競圖重要日程</small></h2>
          </div>
          <ul className="my-6">
            <li>
              <p className="small">2022.7.1</p>
              <p className="h2">競圖規格公告及報名開跑</p>
              <Divider className="border-primary" />
            </li>
            <li>
              <p className="small">2022.11.10</p>
              <p className="h2">初選交件截止</p>
              <Divider className="border-primary" />
            </li>
            <li>
              <p className="small">2022.12.1</p>
              <p className="h2">初選入圍者公布</p>
              <Divider className="border-primary" />
            </li>
            <li>
              <p className="small">2023.2.15</p>
              <p className="h2">決選交件截止</p>
            </li>
          </ul>

          <div className="text-white bg-primary">
            <h2><small>計畫相關重要日程</small></h2>
          </div>
          <ul className="my-6">
            <li>
              <p className="small">2022.7.1</p>
              <p className="h2">民眾參與活動</p>
              <Divider className="border-primary" />
            </li>
            <li>
              <p className="small">2022.11.10</p>
              <p className="h2">成果展覽</p>
              <Divider className="border-primary" />
            </li>
            <li>
              <p className="small">2022.12.1</p>
              <p className="h2">設計成果論壇</p>
            </li>
          </ul>
        </div>

        <ScrollNav>
          <ScrollNavLink to="motivation">
            競選主題
          </ScrollNavLink>
          <ScrollNavLink to="declaration">
            競圖宣言
          </ScrollNavLink>
          <ScrollNavLink to="event">
            設計議題
          </ScrollNavLink>
          <ScrollNavLink to="qualification">
            參賽資格
          </ScrollNavLink>
          <ScrollNavLink to="specification">
            交件規格
          </ScrollNavLink>
          <ScrollNavLink to="award">
            獎勵辦法
          </ScrollNavLink>
          <ScrollNavLink to="standard">
            評比標準
          </ScrollNavLink>
        </ScrollNav>
        <Section id="motivation" className="py-12 text-center border-none">
          <h2 className="h2">競圖主題</h2>
          <h2 className="h1">首都之心 城中轉正</h2>
        </Section>
        <Section id="declaration" className="border-none">
          <div className="p-2 text-center border border-black bg-competition/50">
            <h2 className="text-base">競選宣言</h2>
          </div>
          <div className="pt-12">
            <p className="mb-12">
              位處臺北城中的中正紀念堂園區，是當代首都城市重要的公共空間，也是市民之心凝結與再現之處。此區及週邊的地景在歷史長河中累疊成複雜且意義多元的歷史畫布，深刻的鑲嵌在每位歷史主體的生命經驗中，而威權統治象徵、府院機構、尋常生活、市民社會與政治社會動員、藝術文化休閒等不同城市生活樣態與意義交會則躍然其上。
            </p>
            <p>
              因此，此次競圖基於鼓勵參與者提出深具市民之心凝聚力的未來空間想像之前提，將中正紀念堂園區的新願景視為開放性思辨的一環，配合競圖引動的視覺體驗，會有更多回合轉型反省相關的討論和參照，形成再一波社會的互動溝通。期待透過競圖激盪出可回應臺灣複雜社會脈絡的公共空間多元轉型提案，使得更多的討論視角浮現，進而找出鏈結當代期望、進步社會價值與未來想像的首都形貌。
            </p>
          </div>
        </Section>
        <Section id="event" className="border-none ">
          <div className="p-2 mb-12 text-center border border-black bg-competition/50">
            <h2 className="text-base">設計議題</h2>
          </div>

          <p className="mb-12">本次徵件重視歷史文化的思考、空間設計的創意和未來營運的持續，並鼓勵參賽個人或團隊參加主辦方舉辦的各式民眾參與活動。作為首都城市中心的重要空間，設計提案必須回應多元的日常使用模式，看見社會關係、歷史詮釋、文化象徵及當代議題，並據此來形塑當代的城市生活，創造新的社會價值。因此，本次競圖的設計議題涵蓋【意義詮釋上的新生】、【空間場域之更動】、【使用營運的轉變】：</p>
          <p className="mb-12"><span className="text-primary">意義詮釋上的新生</span> 必須聚焦於中正紀念堂園區的歷史脈絡，運用實質的空間論述，去除威權，回應歷史，實踐當代民主自由的價值、滿足市民殊異多元的生活期待、回應社會重要議題，使轉型的概念得以立足當代又能充分自信地迎向未來。</p>
          <p className="mb-12"><span className="text-primary">使用營運的轉變</span> 考量基地的區位特殊性及首都城市文化策略的前瞻性，提案需針對中正紀念堂園區的空間形式與空間性格，提出可具體闡述使用機能與意義的構想，在探究具體建築樣式與空間關係時，同時需考量公共空間與市民社會之間的互動、基地周邊社區及生態環境相連結的都市紋理。</p>
          <p className="mb-12"><span className="text-primary">空間場域之更動</span> 提案應針對中正紀念堂園區與建築量體之使用，引入新的空間主張，瞻望下一代城市生活的需要，調和多元互動的公共性，提出永續性運作機制，為這塊基地營造新的服務與功能。</p>
          <p>註：為了讓更多創見得以發揮、更多意見可以加入社會溝通，提案者提出的轉型方案，暫時不須考慮文化資產、都市計畫、都市設計相關空間管制規範。</p>
        </Section>
        <Section id="qualification" className="border-none ">
          <div className="p-2 text-center border border-black bg-competition/50">
            <h2 className="text-base">參賽資格</h2>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">學生組</h3>
          </div>
          <div className="mb-10">
            <p>對象為高中職以上在學者或2022 年取得學位之應屆畢業生。不限國籍地區之報名者參加，不限個人或多人組隊，亦鼓勵組成多元背景團隊參加。</p>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">社會組</h3>
          </div>
          <div>
            <p>不限個人、社團、法人或公司單位，需至少一位成員為空間領域專業者。不限國籍地區之報名者參加、不限個人或多人組隊，亦鼓勵組成多元背景團隊參加。</p>
          </div>

        </Section>
        <Section id="specification" className="border-none ">
          <div className="p-2 text-center border border-black bg-competition/50">
            <h2 className="text-base">交件規格</h2>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">學生組</h3>
          </div>
          <div className="mb-10">
            <p>初審：需繳交 1-3 張 A1 圖面，或 3 分鐘內影像（100 MB以內），皆繳交亦可。並檢附作品說明文字（800 字內）。版面或影片中必須包含必要的設計概念呈現，任意表現法皆可被接受（如標題、圖表、草圖、3D 模擬、平面圖、剖面圖、立面圖、照片等）。</p>
            <p>決審：針對初審內容加強、增補之 3-5 張A1 圖面，或 6 分鐘內影像，兩者擇一，皆繳交亦可。評選時需準備口頭簡報 15 分鐘。</p>
            <p>評審推薦優秀作品前五名：於成果展覽時繳交一個 2mx2mx2m 為限的模型或其他多元媒材作品。</p>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">社會組</h3>
          </div>
          <div>
            <p>初審：須繳交 1 張 A1 圖面，或 3 分鐘內影像（100 MB以內），兩者擇一，皆繳交亦可，並檢附作品說明文字（800 字內）。</p>
            <p>決審：針對初審交件內容加強、增補之 3 張A1 圖面或 6 分鐘內影像，評選時需準備口頭簡報 15 分鐘。</p>
            <p>評審推薦優秀作品前五名：於成果展覽時繳交一個 2mx2mx2m 為限的模型或其他多元媒材作品。</p>
          </div>
        </Section>
        <Section id="award" className="border-none ">

        </Section>
        <Section id="standard" className="text-center border-none ">
          <div className="p-2 mb-12 text-center border border-black bg-competition/50">
            <h2 className="text-base">評比標準</h2>
          </div>
          <h3>
            <small>初選</small>
          </h3>
          <p>設計議題的回應</p>
          <Divider />
          <h3>
            <small>決選</small>
          </h3>
          <p>設計議題的回應</p>
          <p>基地與歷史脈絡的了解與分析</p>
          <p>創意構想與論述的清晰表達</p>
          <p>眾參與計畫互動</p>
        </Section>

        <Button>下載中文簡章</Button>
      </div>
    </div>
  );
}

export default Competition;
