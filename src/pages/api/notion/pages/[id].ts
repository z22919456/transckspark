import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { id } = req.query;
  // const pageId = '685a2f34-36b2-4cf1-9014-dea6beb4dad8';
  if (!id) return res.status(429).json('No Token');
  try {
    const blockResponse = await notion.blocks.children.list({ block_id: id as string });
    const pageResponse = await notion.pages.retrieve({ page_id: id as string });

    return res.status(200).json({
      block: blockResponse.results,
      page: pageResponse,
    });
  } catch (err) {
    return res.status(500);
  }
}

// render use this https://github.com/9gustin/react-notion-render
