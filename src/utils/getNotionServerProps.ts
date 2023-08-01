import { getPage, getPageList } from 'lib/notion';
import { GetStaticPropsContext } from 'next';
import { ExtendedRecordMap } from 'notion-types';
import uploadImage from './uploadImage';

const getPageServerSideProps = (dbId: string) => async (context: GetStaticPropsContext<{ id: string }>) => {
  const id = context.params?.id;
  if (!id) return { notFound: true };

  try {
    const pageList = await getPageList(dbId, false);
    const pageInformation = pageList.find((p) => p.id === id);
    const pageIndex = pageList.findIndex((p) => p.id === id);

    const page = await getPage(id);

    const signedUrlKeys = Object.keys(page.signed_urls);

    const newSignedUrl: ExtendedRecordMap['signed_urls'] = {};

    await Promise.all(signedUrlKeys.map(async (key) => {
      newSignedUrl[key] = await uploadImage(page.signed_urls[key], 5);
    }));

    // https://file.notion.so/f/s/a1bf65e2-567a-4508-93f3-85b0bae5cbf0/%E6%B4%BB%E5%8B%95%E5%B0%81%E9%9D%A2for_new_site(16x9)-05.jpg?id=0d34216c-b13f-47fa-a8e7-b0ae0a10b0bf&table=block&spaceId=b0498f07-0602-4afe-a9a7-0b552608003f&expirationTimestamp=1683640194876&signature=Zz8BDooXt1G9kK-VwKAGGtkG_TbZyyQ2BsdYELbWDF8

    return {
      props: {
        pageInformation: JSON.parse(JSON.stringify({ ...pageInformation, cover: { url: newSignedUrl[signedUrlKeys[0]] } })),
        blocks: JSON.parse(JSON.stringify({ ...page, signed_urls: newSignedUrl })),
        prevPage: pageList[pageIndex - 1]?.id || '',
        nextPage: pageList[pageIndex + 1]?.id || '',
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};

export default getPageServerSideProps;
