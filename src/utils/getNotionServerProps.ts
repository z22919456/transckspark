import { getPage, getPageList } from 'lib/notion';
import { GetServerSidePropsContext } from 'next';

const getPageServerSideProps = async (context: GetServerSidePropsContext<{ id: string }>) => {
  const id = context.params?.id;
  if (!id) return { notFound: true };

  try {
    const pageList = await getPageList(process.env.NOTION_NEWS_DB_ID || '');
    const pageInformation = pageList.find((p) => p.id === id);

    const page = await getPage(id);

    return {
      props: {
        pageInformation: JSON.parse(JSON.stringify(pageInformation)),
        blocks: JSON.parse(JSON.stringify(page)),
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};

export default getPageServerSideProps;
