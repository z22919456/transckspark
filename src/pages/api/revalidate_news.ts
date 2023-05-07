import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const getNews = async () => {
  const response = await axios.get<{ id:string }[]>(`https://notion-api.splitbee.io/v1/table/${process.env.NOTION_NEWS_DB_ID}`);
  return response.data.map((d) => `/news/${d.id}`);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // revalidate the entire exhibition page
    await res.revalidate('/news');

    const exhibitions = await getNews();
    await Promise.all(exhibitions.map(async (page) => {
      await res.revalidate(page);
    }));

    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}