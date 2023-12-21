"use client";
import React from 'react';
import { HiOutlinePlus } from "react-icons/hi";
import CtaButton from '../../components/CtaButton';
import Accordion from '../../components/Accordion';
import useFetchNotes from '../../libs/queries/useFetchNotes';
import NotesLoader from 'core/Loaders/NotesLoader';

const MyNotes = () => {
  const { data: notes, isLoading, isFetching } = useFetchNotes();

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

        {
          isLoading ? (
            <NotesLoader />
          ): (
            <Accordion items={notes}/>
          )
        }
      </div>
    </section>
  )
}

export default MyNotes;