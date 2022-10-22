import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const databaseId = process.env.NOTION_NEWS_DB_ID;
  if (!databaseId) return res.status(429).json('No Token');
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: '狀態',
        select: {
          equals: '已發布',
        },
      },
    });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(500);
  }
}
