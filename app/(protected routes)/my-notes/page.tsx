"use client";
import React from 'react';
import { HiOutlinePlus } from "react-icons/hi";
import CtaButton from 'core/ui/CtaButton';
import Accordion from '@components/Accordion';
import useFetchNotes from 'libs/queries/useFetchNotes';
import NotesLoader from 'core/Loaders/NotesLoader';
import MainContainer from '@components/MainContainer';

const MyNotes = () => {
  const { data: notes, isLoading, isFetching } = useFetchNotes();

  return (
    <MainContainer title={"Hey! Welcome Back, Praveen Goswami"}>
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
    </MainContainer>
  )
}

export default MyNotes;