import {
  FormControl, FormHelperText, FormLabel, Input,
} from '@chakra-ui/react';
import { withAdminLayout } from 'components/admin/AdminLayout';
import DatePicker from 'components/DatePicker';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const TipTap = dynamic(import('components/admin/TipTap'), { ssr: false });
function CreateNews() {
  const [value, setValue] = useState('');

  console.log(value);
  return (
    <div>
      <h1 className="text-3xl font-medium">建立最新消息</h1>
      <hr className="my-5"></hr>
      <form className="w-full space-y-5">
        {/* title */}
        <FormControl>
          <FormLabel>最新消息標題</FormLabel>
          <Input type='text' />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        {/* date */}
        <FormControl>
          <FormLabel>活動日期</FormLabel>
          <DatePicker onChange={() => { }} />
        </FormControl>
        {/* image */}
        <FormControl>
          <FormLabel>最新消息標題</FormLabel>
          <Input type="file" />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <TipTap value={value} onChange={setValue} />
        {/* <Lexical /> */}
        {/* content */}
        {/* active */}
      </form>
    </div>
  );
}

// {
//   title: '亞當計畫－年會活動即日起啟動報名！',
//   image: 'https://news.image.url'
//   content: '<p>自2022年09月08日至2023年01月08日於臺北市立美術館二樓展出，由館內資深策展人張芳薇策劃，邀集1960年代以降，28組橫跨數個世代的臺灣與國際藝術家，也與國立臺灣美術館、國立歷史博物館、奇美博物館、韓國國立現代美術館、私人機構與藏家合作借件，展出媒材形式多元，包含平面繪畫、實驗水墨、動力裝置、行為表演、雕塑、錄像及相關文物等作品，打開與觀眾多重層次的對話，同時邀請文化研究學者李立鈞以圖像理論、文化史與哲學視角，發展一系列圖文來回應展題，繼而延展研究思路與作品之間對話，本展更試圖將觀看與閱讀的路徑融合成「行走中的展覽」體驗。</p>'
//   date: '2022/09/10'
// }

CreateNews.getLayout = withAdminLayout;

export default CreateNews;
