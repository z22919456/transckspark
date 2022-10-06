import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'components/Accordion';
import Header from 'components/header';
import React from 'react';

import { faqData1, faqData2 } from '../data/faqData';

function Faq() {
  return (
    <div className="question">
      <Header />

      <div className="py-16 text-center">
        <h1>常見問答</h1>
        <h1 className="h2">FAQ</h1>
      </div>

      <div className="px-5">
        <div className="mb-20">
          <h1 className="mb-5 text-base text-center">競圖報名相關問題</h1>
          <Accordion type="single" >
            {faqData1.map((faq) => (
              <AccordionItem value={faq.id.toString()} key={faq.id}>
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <h1 className="mb-5 text-base text-center">想像中正紀念堂的100種方式系列活動相關問題</h1>
          <Accordion type="single" >
            {faqData2.map((faq) => (
              <AccordionItem value={faq.id.toString()} key={faq.id}>
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Faq;
