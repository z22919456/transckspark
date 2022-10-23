import { Client } from '@notionhq/client';
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import axios from 'axios';
import { BlockMapType } from 'react-notion';

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

export type PageData<T> = {
  id: string
  Title: string
} & T;

export const getPageList = async <T>(id: string) => {
  const response = await axios.get<Array<PageData<T>>>(`https://notion-api.splitbee.io/v1/table/${id}`);
  const originResponse = await notion.databases.query({
    database_id: id,
  });

  const pagesWithCover = originResponse.results.map((page) => ({ id: page.id, cover: (page as PageObjectResponse).cover[(page as PageObjectResponse).cover.type] }));
  return response.data.map((page) => ({
    ...page,
    ...pagesWithCover.find((c) => c.id === page.id),
  }));
};

export const getPage = async (id: string) => {
  const response = await axios.get<BlockMapType>(`https://notion-api.splitbee.io/v1/page/${id}`);
  return response.data;
};
