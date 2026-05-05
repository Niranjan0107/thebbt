'use client';
import Link from "next/link";
import { cases } from "@/lib/cases";
import { useState } from 'react';
import Image from "next/image";
import DownArrow from "../../public/down-arrow.svg";



const filters = [
  'All',
  'Real Estate',
  'Manufacturing',
  'Consumer & D2C',
  'Enterprises',
  'Social Impact',
];

export default function CaseStudiesPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCases =
    activeFilter === 'All'
      ? cases
      : cases.filter((c) => c.category === activeFilter);

  return (
    <main className="text-white min-h-screen px-6 md:px-16 py-16 bg-[#0A0A0A] ">
      
      {/* HEADER */}
      <div className="case-header">
        <div className="case-header-top flex justify-between">
        <p className="tracking-widest font-inter font-medium text-[11.47px] leading-[17.2px] tracking-[2.06px] uppercase text-center text-white/60 mb-4">
          INDEX OF WORK
        </p>
       <p className="font-inter font-medium text-[11.47px] leading-[17.2px] tracking-[2.06px] uppercase text-center text-white/60 tracking-widest mb-4">
  {filteredCases.length} OF {cases.length} CASES
</p>
</div>
        <h1 className="text-big">
          Selected <span className="italic">cases.</span>
        </h1>

        <p className="text-neutral-400 mt-6 max-w-xl font-normal text-[14px] leading-[22.4px] tracking-[-0.16px] text-white/65">
          A working archive of the houses, institutions, and operators we’ve
          shaped over the last decade. Filter by sector, sort by year, or open
          one at random.
        </p>

        {/* FILTERS + VIEW TOGGLE */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10 mb-10 gap-6 border-b border-t border-neutral-800 pt-4 pb-4">
          
          {/* FILTERS */}
          <div className="flex flex-wrap gap-4 text-xs tracking-wide">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-medium text-[11px] leading-[16.5px] tracking-[1.54px] uppercase text-center text-[#FFFFFF8C] px-3 py-1 border ${
                  activeFilter === f
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* VIEW TOGGLE */}
          <div className="flex gap-0">
            <button
              onClick={() => setView('grid')}
              className={`px-2 py-2 border ${
                view === 'grid'
                  ? 'bg-white text-black'
                  : 'border-neutral-700 text-neutral-400'
              }`}
            >
              
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 1.75V12.25" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75 7H12.25" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75Z" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
            <button
              onClick={() => setView('list')}
              className={`px-2 py-2 border ${
                view === 'list'
                  ? 'bg-white text-black'
                  : 'border-neutral-700 text-neutral-400 border-l-0'
              }`}
            >
              
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75 7H1.75583" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75 10.5H1.75583" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75 3.5H1.75583" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66675 7H12.2501" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66675 10.5H12.2501" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.66675 3.5H12.2501" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
          </div>
        </div>
      </div>

      {/* GRID VIEW */}
      {view === 'grid' && (
  <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mt-12 pb-15">
          {filteredCases.map((item) => (
            <Link href={`/case-studies/${item.slug}`}>
            <div key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[360px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 mb-4 flex justify-between">
                 <p className="text-[11px] leading-[16.5px] tracking-[-0.16px] text-white/65">
                  {item.id} · {item.year}
                </p>
                <p className="text-[11px] leading-[16.5px] tracking-[-0.16px] text-white/65 uppercase">
                  {item.category}
                </p>
              </div>
              <h3 className="mb-3 text-[25px] leading-[36.5px] tracking-[-0.16px] text-white flex items-center gap-x-[30px]">{item.title} <Image className="rotate-[229deg]"  src={DownArrow}
      alt="BBT Down Arrow"
      width={18}
      height={18}/></h3>
              <span className="text-[13px] leading-[16.5px] tracking-[-0.16px] text-white/65"> {item.description}</span>
            </div>
             </Link>
          ))}
        </div>
      )}

      {/* LIST VIEW */}
      {view === 'list' && (
        <div className="mt-12 divide-y divide-neutral-800">
          {filteredCases.map((item) => (
            <Link href={`/case-studies/${item.slug}`}>
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center md:justify-between py-6 hover:bg-neutral-900 transition px-2"
            >
              <div className="flex gap-6 items-center w-[45%]">
                <span className="font-inter font-medium text-[11px] leading-[16.5px] tracking-[-0.16px] text-white/65 w-15">
                  {item.id}
                </span>
                <h3 className="font-normal text-[26px] leading-[39px] tracking-[-0.52px] ">{item.title}</h3>
              </div>

              <div className="flex gap-10 text-sm text-neutral-400 mt-2 md:mt-0 w-[55%] flex justify-between">
                <span className="font-medium text-[12px] leading-[18px] tracking-[0.72px] text-white/55 uppercase">{item.category}</span>
                <span className="font-medium text-[12px] leading-[18px] tracking-[-0.16px] text-white/55">{item.services}</span>
                <span className="font-medium text-[11px] leading-[16px] tracking-[-0.16px] text-white/65">{item.year}</span>
              </div>
            </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}