import { getPage, getPageList } from 'lib/notion';
import { GetStaticPropsContext } from 'next';

const getPageServerSideProps = (dbId: string) => async (context: GetStaticPropsContext<{ id: string }>) => {
  const id = context.params?.id;
  if (!id) return { notFound: true };

  try {
    const pageList = await getPageList(dbId);
    const pageInformation = pageList.find((p) => p.id === id);
    const pageIndex = pageList.findIndex((p) => p.id === id);

    const page = await getPage(id);

    return {
      props: {
        pageInformation: JSON.parse(JSON.stringify(pageInformation)),
        blocks: JSON.parse(JSON.stringify(page)),
        prevPage: pageList[pageIndex - 1]?.id || '',
        nextPage: pageList[pageIndex + 1]?.id || '',
      },
      revalidate: 10,
    };
  } catch (err) {
    return { notFound: true };
  }
};

export default getPageServerSideProps;
