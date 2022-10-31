import axios from 'axios';
import { BlockMapType, NotionRenderer } from 'react-notion';
import React, { ReactNode } from 'react';
import 'react-notion/src/styles.css';

type Props = {
  blocks: BlockMapType
};

function PrivacyPolicy({ blocks }: Props) {
  return <NotionRenderer blockMap={blocks} />;
}

PrivacyPolicy.getLayout = (children: ReactNode) => <main className="p-5">{children}</main>;

export const getStaticProps = async () => {
  try {
    const response = await axios.get<BlockMapType>('https://notion-api.splitbee.io/v1/page/cee103878d234b649b3fcbe3bff6702f');
    return {
      props: {
        blocks: response.data,
      },
      revalidate: 10,
    };
  } catch {
    console.log('fdshfjkdshfjk');
    return {
      props: {
        blocks: [],
      },
    };
  }
};

export default PrivacyPolicy;
