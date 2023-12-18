"use client";
import React from 'react';
import { HiOutlinePlus } from "react-icons/hi";
import CtaButton from '@/components/CtaButton';
import Accordion from '@/components/Accordion';
import useFetchNotes from '@/libs/queries/useFetchNotes';

const items = [
  {
    id: '1',
    label: 'Can I use React on a project?',
    content:
      'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
  },
  {
    id: '2',
    label: 'Can I use Javascript on a project?',
    content:
      'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
  },
  {
    id: '3',
    label: 'Can I use CSS on a project?',
    content:
      'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
  },
];

const MyNotes = () => {
  const response = useFetchNotes();

  console.log(response)

  return (
    <section className='h-full w-full py-8 flex flex-col gap-5'>
      <div className='py-3'>
        <h1 className='text-5xl text-slate-600 font-extralight'>
          Hey! Welcome Back, Praveen Goswami
        </h1>
      </div>
      <hr />
      <div className='flex flex-col items-start gap-5'>
        <CtaButton primary className='px-4 text-sm hover:tracking-widest transition-all duration-700 rounded-sm'>
          <span className='inline-flex items-center justify-center gap-2'>
            <span><HiOutlinePlus className="text-xl"/></span>
            <span>CREATE NEW NOTE</span>
          </span>
        </CtaButton>

        <Accordion items={items}/>
      </div>
    </section>
  )
}

export default MyNotes;