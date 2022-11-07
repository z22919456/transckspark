import 'react-notion-x/src/styles.css';

import { NotionRenderer } from 'react-notion-x';
import React, { ReactNode } from 'react';
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import Image from 'next/image';

type Props = {
  blocks: ExtendedRecordMap
};

function PrivacyPolicy({ blocks }: Props) {
  return <NotionRenderer components={{ nextImage: Image }} recordMap={blocks} />;
}

PrivacyPolicy.getLayout = (children: ReactNode) => <main className="p-5">{children}</main>;

export const getStaticProps = async () => {
  try {
    const notion = new NotionAPI();
    const page = await notion.getPage('cee103878d234b649b3fcbe3bff6702f');
    // const response = await axios.get<BlockMapType>('https://notion-api.splitbee.io/v1/page/cee103878d234b649b3fcbe3bff6702f');
    return {
      props: {
        blocks: page,
      },
      revalidate: 10,
    };
  } catch {
    return {
      props: {
        blocks: [],
      },
    };
  }
};

export default PrivacyPolicy;
