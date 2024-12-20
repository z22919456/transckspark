export type NotionPageData <T = unknown> = {
  id: string
  Title: sting
  '狀態': '已發布' | string
  '發布日期': string
  cover: {
    url: string
  }
} & T;

export type NewsInformation = {
  '活動日期': string
  '摘要': string
};

export type ActivityInformation = {
  '活動日期': string
  '摘要': string
  '報名截止日期': string
  '種類': '導覽' | '講座' | '工作坊' | '影展' | '論壇'
};

export type WorkStudentInformation = {
  '團隊名稱': string
  '發布狀態': string
  '發布日期': string
  '團隊成員與學校': string
  '指導老師': string[]
};

export type WorkOpenInformation = {
  '團隊名稱': string
  '發布狀態': string
  '發布日期': string
  '團隊成員與單位': string[]
};

export type ExhibitionInformation = {
  '製作者': string
  '簡介': string
  '種類': '學生組' | '社會組'
  '優勝': boolean
};

export type UnnamedInformation = {
  'YT連結': string
  '類型': '名人推薦' | '得獎作品介紹'
  '創作者': string
  '簡介': string
};

export type OnlineExhibitionInformation = {
  '類型': '自然共生' | '解放空白' | '記憶迴響' | '脈絡交織' | '眾聲喧嘩'
  '創作者': string
  '簡介': string
};
