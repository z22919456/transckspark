import Button from 'components/Button';
import Divider from 'components/Divider';
import Header from 'components/Header';
import ScrollNav, { ScrollNavLink } from 'components/ScrollNav';
import Section from 'components/Section';
import { competitionEnglishData } from 'data/competitionData';
import Link from 'next/link';
import React from 'react';

function English() {
  const {
    schedule,
    importantDates,
    statements,
    theme,
    topics,
    forWhom,
    format,
    award,
    criteria,
    download,
  } = competitionEnglishData;
  return (
    <div className="competition">
      <Header />
      <div className="px-5 mb-12">
        <div className="py-10 text-center">
          <h1>Competition</h1>
        </div>
        {/* 時程 */}
        <div className="text-center text-primary">
          <div className="text-white bg-primary">
            <h2><small>Schedule</small></h2>
          </div>
          <ul className="my-6">
            {schedule.map((s) => (
              <li key={s.title}>
                <p className="small">{s.time}</p>
                <p className="h2">{s.title}</p>
                <Divider className="border-primary" />
              </li>
            ))}
          </ul>

          <div className="text-white bg-primary">
            <h2><small>Important Dates</small></h2>
          </div>
          <ul className="my-6">
            {importantDates.map((s) => (
              <li key={s.title}>
                <p className="small">{s.time}</p>
                <p className="h2">{s.title}</p>
                <Divider className="border-primary" />
              </li>
            ))}
          </ul>
        </div>

        <ScrollNav>
          <ScrollNavLink to="theme">
            Theme
          </ScrollNavLink>
          <ScrollNavLink to="statement">
            Statement
          </ScrollNavLink>
          <ScrollNavLink to="topic">
            Design Topics
          </ScrollNavLink>
          <ScrollNavLink to="for_whom">
            For Whom
          </ScrollNavLink>
          <ScrollNavLink to="format">
            Format
          </ScrollNavLink>
          <ScrollNavLink to="award">
            Awards
          </ScrollNavLink>
          <ScrollNavLink to="criteria">
            Criteria
          </ScrollNavLink>
        </ScrollNav>
        <Section id="theme" className="py-12 text-center border-none">
          <h2 className="h2">Theme</h2>
          <h2 className="h1">{theme}</h2>
        </Section>
        <Section id="statement" className="border-none">
          <div className="p-2 text-center border border-black bg-competition/50">
            <h2 className="text-base">Statement</h2>
          </div>
          <div className="pt-12">
            {statements.map((s, i) => (<p className="mb-12 last:mb-0" key={i}>{s}</p>))}
          </div>
        </Section>
        <Section id="topic" className="border-none ">
          <div className="p-2 mb-12 text-center border border-black bg-competition/50">
            <h2 className="text-base">Design Topics</h2>
          </div>

          <p className="mb-12">{topics.content}</p>
          <p className="mb-12"><span className="text-primary">Fresh Interpretations</span><br />{topics.freshInterpretations}</p>
          <p className="mb-12"><span className="text-primary">Spatial Transformation</span><br />{topics.spatialTransformation}</p>
          <p className="mb-12"><span className="text-primary">New Usage</span><br />{topics.newsUsage}</p>
          <p>{topics.note}</p>
        </Section>
        <Section id="for_whom" className="border-none ">
          <div className="p-2 text-center border border-black bg-competition/50">
            <h2 className="text-base">For Whom</h2>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">Student Category</h3>
          </div>
          <div className="mb-10">
            <p>{forWhom.student}</p>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">Open Category</h3>
          </div>
          <div>
            <p>{forWhom.open}</p>
          </div>

        </Section>
        <Section id="format" className="border-none ">
          <div className="p-2 text-center border border-black bg-competition/50">
            <h2 className="text-base">Format</h2>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">Student Category</h3>
          </div>
          <div className="mb-10">
            {format.student.map((f, i) => (
              <p key={i}>{f}</p>
            ))}
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">Open Category</h3>
          </div>
          <div>
            {format.open.map((f, i) => (
              <p key={i}>{f}</p>
            ))}
          </div>
        </Section>
        <Section id="award" className="border-none ">
          <div className="p-2 text-center border border-black bg-competition/50">
            <h2 className="text-base">Awards</h2>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">Student Category</h3>
          </div>
          <div className="mb-10">
            {award.student.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">Open Category</h3>
          </div>
          <div>
            {award.open.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>
        </Section>
        <Section id="criteria" className="text-center border-none ">
          <div className="p-2 mb-12 text-center border border-black bg-competition/50">
            <h2 className="text-base">Criteria</h2>
          </div>
          <h3>
            <small>Preliminaries</small>
          </h3>
          {criteria.first.map((p, i) => (<p key={i}>{p}</p>))}
          <Divider />
          <h3>
            <small>Finals</small>
          </h3>
          {criteria.finals.map((p, i) => (<p key={i}>{p}</p>))}
        </Section>

        <Link href={download}>
          <Button>Download English Brief</Button>
        </Link>
      </div>
    </div>
  );
}

export default English;
