import judgeImg01 from 'images/judge/01.jpg';
import judgeImg02 from 'images/judge/02.jpg';
import judgeImg03 from 'images/judge/03.jpg';
import judgeImg04 from 'images/judge/04.jpg';
import judgeImg05 from 'images/judge/05.jpg';
import judgeImg06 from 'images/judge/06.jpg';
import judgeImg08 from 'images/judge/08.jpg';
import judgeImg09 from 'images/judge/09.jpg';
import judgeImg10 from 'images/judge/10.jpg';
import judgeImg11 from 'images/judge/11.jpg';
import judgeImg12 from 'images/judge/12.jpg';
import judgeImg13 from 'images/judge/13.jpg';
import judgeImg14 from 'images/judge/14.jpg';
import judgeImg15 from 'images/judge/15.jpg';
import judgeImg16 from 'images/judge/16.jpg';
import judgeImg19 from 'images/judge/19.jpg';
import judgeImg20 from 'images/judge/20.jpg';
import { StaticImageData } from 'next/image';

export type JudgeType = {
  id: number
  name: string
  title: string
  engName: string
  information: string
  image: StaticImageData
  alt?: string
};
export const chairman = {
  id: 0,
  name: '賀陳旦',
  title: '評審團主席',
  engName: 'Tan Hochen',
  information: '曾任職台北市都市計畫處、捷運局/公司、交通局，中華電信公司，交通部',
  image: judgeImg01,
};

export const firstJudges = [
  {
    id: 1,
    name: '林芳慧',
    title: 'AECOM全球建築與人居環境業務線運營總監',
    engName: 'Nancy Lin',
    information: '美國普林斯頓大學土木工程學士與哈佛大學建築研究所碩士，美國紐約州註冊建築師。具25年的都市規劃、建築設計以及跨領域工程專業管理的經驗，加入AECOM前在台灣執業並教學了12年。',
    image: judgeImg02,
  },
  {
    id: 2,
    name: '侯志仁',
    title: '華盛頓大學地景建築系專任教授',
    engName: 'Jeffrey Hou',
    information: '現任華盛頓大學地景建築系專任教授、建築系與都市設計與規劃系兼任教授。加州大學柏克萊分校環境規劃博士、建築碩士。侯志仁教授為公民參與及設計行動主義領域的國際學者，曾任維也納工業大學城市文化與公共空間訪問教授、西雅圖中心水岸設計監督委員會技術顧問，長期推動環太平洋社區設計交流，著有《反造再起：城市共生ING》等書。',
    image: judgeImg03,
  },
  {
    id: 3,
    name: '郭瓊瑩',
    title: '中國文化大學景觀學系教授兼系主任／所長',
    engName: 'Monica Kuo',
    information: '現任IFLA-APR亞太區主席，並任教於中國文化大學景觀學系。曾任中華民國景觀學會理事長、中華民國國家公園學會常務理事，推動「生活美學」、「美感教育」、「文化資產保存」與「都市保存」等多光譜行動計畫。2018年擔任基隆市政府「正濱漁港懷舊碼頭色彩計畫」計畫總監，獲國際景觀建築師協會（IFLA）景觀大賞社區營造類卓越獎之殊榮，2020年獲頒國家卓越建設獎之「國土建設特別貢獻獎」，2022年晉升為台灣建築學會會士。代表著作有《水與綠網絡規劃-理論與實務》及《人與地：台灣景觀變遷與調適》。',
    image: judgeImg04,
  },
  {
    id: 4,
    name: '陳翠蓮',
    title: '台灣大學歷史學系教授',
    engName: 'Tsui-Lien Chen',
    information: '現任台灣民間真相與和解促進會理事，任教於台灣大學歷史學系。執教前曾任自立晚報副總編輯、政治組主任。研究日治時期台灣政治史、戰後台灣政治史，關心台灣民主鞏固與轉型正義相關工作，著有《重構二二八》、《台灣人的抵抗與認同1920-1950》、《百年追求卷一自治的夢想》等書。',
    image: judgeImg05,
  },
  {
    id: 5,
    name: '曾旭正',
    title: '台南藝術大學教授兼院長',
    engName: 'Shu- Cheng Tseng',
    information: '成功大學建築系畢業，東海大學建築碩士，台大建築與城鄉研究所博士。曾任淡江大學建築系副教授，專業者都市改革組織(OURs)理事長，中華民國社區營造學會理事長、建築改革社社長、台南縣副縣長、台南市副市長、國發會副主委。長期投入台灣的社會運動與社區營造，也參與社區營造政策的擬定、九二一災後重建、新校園運動等。',
    image: judgeImg06,
  },
  {
    id: 0,
    name: '賀陳旦',
    title: '評審團主席',
    engName: 'Tan Hochen',
    information: '曾任職台北市都市計畫處、捷運局/公司、交通局，中華電信公司，交通部',
    image: judgeImg01,
    chairman: true,
  },
  {
    id: 6,
    name: '黃海鳴',
    title: '藝術評論、藝術生態觀察者',
    engName: 'Hai-Ming Huang',
    information: '巴黎第八大學美學博士，1990年開始，一直是台灣當代藝術生態重要觀察者，主要專長、角色包括：當代藝術評論、當代藝術策展、公共藝術評審、藝術補助案評審、跨領域藝術生態環境觀察，以及透過藝術社會介入方式進行社區營造。1997年開始並持續將社會介入型當代藝術展覽帶進城鄉公共空間，1998-2001年間參與爭取將閒置華山酒廠作為跨領域藝術文化特區的運動，並負責期間華山藝術特區的經營與管理。曾任臺北教育大學藝術系教授及文化創意產業經營學系創系系主任。2012-14年之間曾任台北市立美術館館長兩年半，關心跨領域合作及當代藝術進入真實社會空間的能量。2015年退休後專注於台灣特別具有持續性發展企圖與實踐的藝術節觀察。2020年在當代館策畫「穿孔城市」。',
    image: judgeImg08,
  },
  {
    id: 7,
    name: '黃聲遠',
    title: '田中央工作群 主持建築師',
    engName: 'Sheng-Yuan Huang',
    information: '1963年生於台北，東海建築學士，耶魯建築碩士。1993年回台，1994年定居宜蘭，漸漸發展出田中央聯合建築師事務所＋田中央工作群。深耕二十多年，以堅定的腳步啟發一波又一波年輕建築師與土地及時間做朋友。高度在地性的思想及原創語彙，默默形塑出空間自由的樣貌，並漸漸於國際引起共嗚。2015年日本Gallery Ma邀展並出版，兩年後成為第一位獲頒吉阪隆正文化賞的外國人也是第一組建築師團隊。 近年連續受邀至歐洲8國巡迴展，2018獲台灣國家文藝獎及第三屆總統創新獎肯定。2021受大會邀請以台灣藝術家的正式身分，於威尼斯雙年展主展館軍火庫展出。',
    image: judgeImg09,
  },
  {
    id: 8,
    name: '詹偉雄',
    title: '文化社會學研究者',
    engName: 'Wei-Hsiung Chan',
    information: '1961年生於台中縣豐原鎮，台大新聞研究所碩士。九〇年代做過財經記者、廣告公司創意 總監、參與博客來網路書店創辦， 1999年參與《數位時代》雜誌創辦，擔任總編輯，隨後 陸續參與《Shopping Design》、《Soul》、《Gigs》、《短篇小說》等雜誌之創辦。著有 《美學的經濟》(2006年圖書金鼎獎)，《球手之美學》(2006時報開卷好書獎)，目前主編 臉譜出版世界山岳文學選輯，於公視擔任《群山之島》行腳節目製作人，兼及文化與社會變 遷研究、旅行、寫作。',
    image: judgeImg10,
  },
  {
    id: 9,
    name: '蔡詩萍',
    title: '作家，資深媒體人',
    engName: 'Shi-Ping Tsai',
    information: '對民主政治有高度信念，總認為群眾的智慧，足以慢慢引領這塊土地，走出權力的傲慢，步向多元且相互尊重的未來。',
    image: judgeImg11,
  },
];

export const finalJudges = [
  {
    id: 1,
    name: 'Jolanta Gromadzka',
    title: '波蘭建築博物館副館長',
    engName: 'Jolanta Gromadzka',
    information: '畢業於波蘭弗羅茨瓦夫大學（University of Wrocław）藝術史研究所及波蘭雅蓋隆大（Jagiellonian University）大學博物館策展研究。專注於十九世紀及二十世紀建築的資深策展人，目前是波蘭建築博物館副館長',
    image: judgeImg12,
  },
  {
    id: 2,
    name: '王明蘅',
    title: '成功大學建築系退休教授',
    engName: 'Ming-Hung Wang',
    information: '成功大學建築系，美國麻省理工學院建築碩士、哲學博士。在設計理論與方法及環境结構的領域皆有前導性的研究。所指導的學位論文已過百半篇，所主持的科技部專題研究及公私部門委托的專案計劃，合計亦近百項。以主講者，評論者，及發起者的身份，廣泛參與住宅與都市，文化與保存的活動，對於台灣的人文環境及城鄉發展貢獻其專業能力。在國際與兩岸學術會議中，經常出席為發表人或主持人。在指導學生參與的國內外設計競賽中，曾多次獲得主要獎項，也主辦過多項國際間的藝術交流及教學参訪活動。在擔任台南市景觀總顧問期間，所主持的重大計畫〈安平港歷史園區〉曾獲國際水岸中心的2004年水岸規劃卓越獎。',
    image: judgeImg13,
  },
  {
    id: 3,
    name: '林曼麗',
    title: '國家文化藝術基金會董事長',
    engName: 'Mun-Lee Lin',
    information: '現任財團法人國家文化藝術基金會董事長、台北教育大學藝術與造形設計學系名譽教授。日本東京大學教育學博士。長期投身於藝術教育工作外，於歷任台北市立美術館館長、財團法人國家文化藝術基金會董事長及故宮博物院院長等職務期間，持續深耕台灣美術史研究、國際性策展以及企業參與藝術等領域。2011年於長期任教之台北教育大學爭取「北師美術館」的成立，並在「新形態美術館」的理念下，推動多項跨領域與實驗性的展演計畫，以及具開創性之文化交流活動。',
    image: judgeImg14,
  },
  {
    id: 4,
    name: '林靜娟',
    title: '台北科技大學專任副教授、成功大學建築系兼任副教授',
    engName: 'Ching-Chuan Lin',
    information: '英國曼徹斯特大學規劃暨景觀系博士。專業橫跨建築設計、都市設計和景觀建築。以建築理論與創作為教學主軸，以設計方法為研究核心，同時陸續結合創作型實作做為建築教學之實踐與驗證。',
    image: judgeImg15,
  },
  {
    id: 5,
    name: '曾成德',
    title: '陽明交通大學建築所終身講座教授',
    engName: 'Chun-Tei Tseng',
    information: '哈佛大學設計學院建築碩士，陽明交通大學建築所跨領域設計科學中心主任，教育部美感與設計課程創新計畫主持人。曾成德的建築理念在於力行教育、專業，與社會實踐，追求創新、永續與卓越。',
    image: judgeImg16,
  },
  {
    id: 6,
    name: '曾旭正',
    title: '台南藝術大學教授兼院長',
    engName: 'Shu-Cheng Tseng',
    information: '成功大學建築系畢業，東海大學建築碩士，台大建築與城鄉研究所博士。曾任淡江大學建築系副教授，專業者都市改革組織(OURs)理事長，中華民國社區營造學會理事長、建築改革社社長、台南縣副縣長、台南市副市長、國發會副主委。長期投入台灣的社會運動與社區營造，也參與社區營造政策的擬定、九二一災後重建、新校園運動等。',
    image: judgeImg06,
  },
  {
    id: 7,
    name: '賀陳旦',
    title: '曾任職台北市都市計畫處、捷運局/公司、交通局，中華電信公司，交通部',
    engName: 'Tan Hochen',
    information: '曾任職台北市都市計畫處、捷運局/公司、交通局，中華電信公司，交通部',
    image: judgeImg01,
    chairman: true,
  },
  {
    id: 8,
    name: '黃丞儀',
    title: '中央研究院法律學研究所研究員',
    engName: ' Cheng-Yi Huang',
    information: '清華大學科技法律研究所合聘教授、台灣民間真相與和解促進會理事、財團法人島國前進基金會董事長。芝加哥大學法學博士，曾經擔任台灣民間真相與和解促進會理事長2016-2018）、台灣人權促進會副會長2011-2012）、北美洲台灣研究學會會長2007-2008），研究領域包括轉型正義、憲政主義、比較行政法、法律與社會、台灣法律史。學術作品散見Law & Social Inquiry, Washington Journal of International Law, Oxford Handbook of Comparative Administrative Law，台大法學論叢、世新法學等刊物。曾獲美國「法律與社會」學會年度最佳博士論文獎榮譽獎。擔任民間真促會理事長期間，曾與台北律師公會共同舉辦第三屆模擬憲法法庭轉型正義）。受邀擔任文官學院、法官學院、司法官學院講座及憲法法庭鑑定人。近期著作為Constitutionalizing Transitional Justice (Routledge 2022)',
    image: judgeImg19,
  }];
