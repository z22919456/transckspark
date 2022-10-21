import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const id = Number.parseInt(req.query.id as string, 10);
  if (!id) return res.status(404).json('Page Not Found');

  switch (req.method) {
    case 'DELETE': {
      try {
        const news = await prisma.newsArticle.delete({
          where: { id },
        });
        return res.status(403).json({ news });
      } catch (err) {
        console.log(err);
        return res.status(400).json((err as Error).message);
      }
    }
    case 'PUT': {
      try {
        const data = req.body;
        const news = await prisma.newsArticle.update({
          where: { id },
          data,
        });
        return res.status(200).json({ news });
      } catch (err) {
        console.log(err);
        return res.status(400).json((err as Error).message);
      }
    }
    default:
      return res.status(404).json('Page Not Found');
  }
}
