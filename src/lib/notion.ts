import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import axios from 'axios';
import dayjs from 'dayjs';
import { NotionAPI } from 'notion-client';
import { NotionPageData } from 'type';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// export const getDatabase = async (databaseId: string) => {
//   const response = await notion.databases.query({
//     database_id: databaseId,
//   });
//   return response.results;
// };

// export const getPage = async (pageId: string) => {
//   const response = await notion.pages.retrieve({ page_id: pageId });
//   return response;
// };

// export const getBlocks = async (blockId: string) => {
//   const response = await notion.blocks.children.list({
//     block_id: blockId,
//   });
//   return response.results as BlockObjectResponse[];
// };

// export const getBlockWithChildren = async (id: string) => {
//   const blocks = await getBlocks(id);
//   return Promise.all(blocks.map(async (block) => {
//     if (block.has_children) {
//       const subBlocks = await getBlockWithChildren(block.id);
//       return {
//         ...block,
//         [block.type]: {
//           ...block[block.type],
//           children: [
//             ...subBlocks,
//           ],
//         },
//       };
//     }
//     return block;
//   }));
// };

export const getPageList = async <T>(id: string) => {
  const response = await axios.get<Array<NotionPageData<T>>>(`https://notion-api.splitbee.io/v1/table/${id}`);
  const originResponse = await notion.databases.query({
    database_id: id,
  });

  const pagesWithCover = originResponse.results.map((page) => {
    const nullCover = {
      id: page.id,
      cover: { url: '' },
    };
    const { cover } = page as PageObjectResponse;
    if (!cover) return nullCover;

    if ('external' in cover) {
      return {
        id: page.id,
        cover: cover.external,
      };
    }

    if ('file' in cover) {
      return {
        id: page.id,
        cover: cover.file,
      };
    }

    return nullCover;
  });

  return response.data
    .filter((page) => (!page['????????????'] || dayjs().isAfter(dayjs(page['????????????']))) && page['??????'] === '?????????')
    .map((page) => ({
      ...page,
      ...pagesWithCover.find((c) => c.id === page.id),
    }));
};

export const getPage = async (id: string) => {
  const notionApi = new NotionAPI();
  const page = await notionApi.getPage(id);
  return page;
};
