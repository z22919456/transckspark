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
  '學校系所': string
  '發布日期': string
  '團隊成員': string[]
  '指導老師': string[]
};

export type WorkOpenInformation = {
  '團隊名稱': string
  '發布狀態': string
  '發布日期': string
  '就職單位': string
  '團隊成員': string[]
};
