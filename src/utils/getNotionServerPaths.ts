import { getPageList } from 'lib/notion';

const getNotionServerPaths = async (dbId: string) => {
  try {
    const pageList = await getPageList(dbId);
    const ids = await pageList.map((page) => ({ params: page.id }));

    return {
      paths: ids,
      fallback: 'blocking',
    };
  } catch {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export default getNotionServerPaths;
