import axios from 'axios';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/Accordion';
import Header from 'components/Header';
import SEO from 'components/SEO';
import { getPageList } from 'lib/notion';
import React from 'react';

type FaqData = {
  title: string
  faq: FaqResponse[]
}[];

type Props = {
  faqData: FaqData
};

function Faq({ faqData }: Props) {
  return (
    <>
      <SEO title="常見問答   FAQ" />
      <div className="question">
        <Header />

        <div className="py-16 text-center">
          <h1>常見問答</h1>
          <h1 className="h2">FAQ</h1>
        </div>

        <div className="px-5">
          {faqData.map((faqGroup, index) => (
            <div className="mb-20" key={index}>
              <h1 className="mb-5 text-base text-center">{faqGroup.title}</h1>
              <Accordion type="single" collapsible>
                {faqGroup.faq.map((faq) => (
                  <AccordionItem value={faq.id.toString()} key={faq.id}>
                    <AccordionTrigger>
                      {faq['問題']}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div dangerouslySetInnerHTML={{ __html: faq['解答'] }}></div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

type FaqResponse = {
  id: string
  '解答': string
  '分類': string
  '問題': string
};

export const getStaticProps = async () => {
  try {
    const faqList = await axios.get<FaqResponse[]>('https://notion-api.splitbee.io/v1/table/df13a0f7c8c847babdb5f10245f739d8');

    const faqType = Array.from(new Set(faqList.data.map((faq) => faq['分類'])));

    const faqData = faqType.map((type) => ({
      title: type,
      faq: faqList.data.filter((faq) => faq['分類'] === type && !!faq['問題'] && !!faq['解答']),
    }));

    return {
      props: {
        faqData: JSON.parse(JSON.stringify(faqData)),
      },
      revalidate: 10,
    };
  } catch {
    return {
      props: { faqDate: [] },
      revalidate: 10,
    };
  }
};

export default Faq;
