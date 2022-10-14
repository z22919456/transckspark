import Button from 'components/Button';
import Divider from 'components/Divider';
import Header from 'components/Header';
import ScrollNav, { ScrollNavLink } from 'components/ScrollNav';
import Section from 'components/Section';
import { competitionData } from 'data/competitionData';
import Link from 'next/link';
import React from 'react';

function Competition() {
  const {
    schedule,
    importantDates,
    statements,
    topics,
    forWhom,
    format,
    award,
    criteria,
    download,
  } = competitionData;
  return (
    <div className="competition">
      <Header />
      <div className="px-5 mb-12">
        <div className="py-10 text-center">
          <h1>競圖徵件</h1>
          <h1 className="h2">Competition</h1>
        </div>
        {/* 時程 */}
        <div className="text-center text-primary">
          <div className="text-white bg-primary">
            <h2><small>競圖重要日程</small></h2>
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
            <h2><small>計畫相關重要日程</small></h2>
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
            競圖主題
          </ScrollNavLink>
          <ScrollNavLink to="statement">
            競圖宣言
          </ScrollNavLink>
          <ScrollNavLink to="topic">
            設計議題
          </ScrollNavLink>
          <ScrollNavLink to="for_whom">
            參賽資格
          </ScrollNavLink>
          <ScrollNavLink to="format">
            交件規格
          </ScrollNavLink>
          <ScrollNavLink to="award">
            獎勵辦法
          </ScrollNavLink>
          <ScrollNavLink to="criteria">
            評比標準
          </ScrollNavLink>
        </ScrollNav>
        <Section id="theme" className="py-12 text-center border-none">
          <h2 className="h2">競圖主題</h2>
          <h2 className="h1">首都之心 城中轉正</h2>
        </Section>
        <Section id="statement" className="border-none">
          <div className="p-2 text-center border border-black bg-competition/50">
            <h2 className="text-base">競圖宣言</h2>
          </div>
          <div className="pt-12">
            {statements.map((s, i) => (<p className="mb-12 last:mb-0" key={i}>{s}</p>))}
          </div>
        </Section>
        <Section id="topic" className="border-none ">
          <div className="p-2 mb-12 text-center border border-black bg-competition/50">
            <h2 className="text-base">設計議題</h2>
          </div>

          <p className="mb-12">{topics.content}</p>
          <p className="mb-12"><span className="text-primary">意義詮釋上的新生</span> {topics.freshInterpretations}</p>
          <p className="mb-12"><span className="text-primary">使用營運的轉變</span>{topics.spatialTransformation}</p>
          <p className="mb-12"><span className="text-primary">空間場域之更動</span>{topics.newsUsage}</p>
          <p>{topics.note}</p>
        </Section>
        <Section id="for_whom" className="border-none ">
          <div className="p-2 text-center border border-black bg-competition/50">
            <h2 className="text-base">參賽資格</h2>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">學生組</h3>
          </div>
          <div className="mb-10">
            <p>{forWhom.student}</p>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">社會組</h3>
          </div>
          <div>
            <p>{forWhom.open}</p>
          </div>

        </Section>
        <Section id="format" className="border-none ">
          <div className="p-2 text-center border border-black bg-competition/50">
            <h2 className="text-base">交件規格</h2>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">學生組</h3>
          </div>
          <div className="mb-10">
            {format.student.map((f, i) => (
              <p key={i}>{f}</p>
            ))}
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">社會組</h3>
          </div>
          <div>
            {format.open.map((f, i) => (
              <p key={i}>{f}</p>
            ))}
          </div>
        </Section>
        <Section id="award" className="border-none ">
          <div className="p-2 text-center border border-black bg-competition/50">
            <h2 className="text-base">獎勵辦法</h2>
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">學生組</h3>
          </div>
          <div className="mb-10">
            {award.student.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>
          <div className="p-2 mb-12 text-center border border-black ">
            <h3 className="text-base h2">社會組</h3>
          </div>
          <div>
            {award.open.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>
        </Section>
        <Section id="criteria" className="text-center border-none ">
          <div className="p-2 mb-12 text-center border border-black bg-competition/50">
            <h2 className="text-base">評比標準</h2>
          </div>
          <h3>
            <small>初選</small>
          </h3>
          {criteria.first.map((p, i) => (<p key={i}>{p}</p>))}
          <Divider />
          <h3>
            <small>決選</small>
          </h3>
          {criteria.finals.map((p, i) => (<p key={i}>{p}</p>))}
        </Section>

        <Link href={download}>
          <Button>下載中文簡章</Button>
        </Link>
      </div>
    </div>
  );
}

export default Competition;
