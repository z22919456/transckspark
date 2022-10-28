import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/Accordion';
import Header from 'components/Header';
import SEO from 'components/SEO';
import React from 'react';

import faqData from '../data/faqData';

function Faq() {
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
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
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

export default Faq;
