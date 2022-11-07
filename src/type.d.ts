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

export type WorkInformation = {
  '製作者': string
  '簡介': string
  '種類': '學生組' | '社會組'
};
