import axios from 'axios';

const getNotionServerPaths = (dbId: string) => async () => {
  try {
    const pageList = await axios.get<Array<{ id: string }>>(`https://notion-api.splitbee.io/v1/table/${dbId}`);
    const ids = pageList.data.map(({ id }) => ({ params: { id } }));

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
