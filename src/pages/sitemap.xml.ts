import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { getServerSideSitemap } from 'next-sitemap';

const getNews = async () => {
  const response = await axios.get<{ id:string }[]>(`https://notion-api.splitbee.io/v1/table/${process.env.NOTION_NEWS_DB_ID}`);
  return response.data.map((d) => ({
    loc: `${process.env.NEXT_PUBLIC_HOST}/news/${d.id}`,
    lastmod: new Date().toISOString(),
  }));
};

const getActivities = async () => {
  const response = await axios.get<{ id:string }[]>(`https://notion-api.splitbee.io/v1/table/${process.env.NOTION_ACTIVITY_DB_ID}`);
  return response.data.map((d) => ({
    loc: `${process.env.NEXT_PUBLIC_HOST}/public_participation/${d.id}`,
    lastmod: new Date().toISOString(),
  }));
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  let fields = [
    {
      loc: `${process.env.NEXT_PUBLIC_HOST}/`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_HOST}/en`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_HOST}/news`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_HOST}/competition`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_HOST}/judges`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_HOST}/competition_shortlists`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_HOST}/public_participation`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_HOST}/faq`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_HOST}/exhibition`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_HOST}/private_policies`,
      lastmod: new Date().toISOString(),
    },
  ];

  await Promise.all([
    getNews(),
    getActivities(),
  ]).then((values) => {
    values.forEach((p) => {
      fields = fields.concat(p);
    });
  });
  return getServerSideSitemap(ctx, fields);
};

export default function SideMap() {}
