import { NewsArticleCreateInput, PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  switch (req.method) {
    case 'POST': {
      const data = req.body as NewsArticleCreateInput;

      console.log(data);
      try {
        const news = await prisma.newsArticle.create({
          data,
        });

        return res.status(201).json(news);
      } catch (err) {
        console.log(err);
        return res.status(400).json((err as Error).message);
      }
    }
    case 'GET': {
      const news = await prisma.newsArticle.findMany();
      return res.status(200).json({ news });
    }
    default:
      return res.status(404).json('Page Not Found');
  }
}
