import React from 'react';
import { HiOutlinePlus } from "react-icons/hi";
import CtaButton from '@/components/CtaButton';

const MyNotes = () => {
  return (
    <section className='h-full w-full py-8'>
      <div>
        <h1 className='text-5xl'>Hey! Welcome Back, Praveen Goswami</h1>
      </div>
      <CtaButton primary className='px-4 text-sm hover:tracking-widest transition-all duration-700 rounded-sm'>
        <span className='inline-flex items-center justify-center gap-2'>
          <span><HiOutlinePlus className="text-xl"/></span>
          <span>CREATE NEW NOTE</span>
        </span>
      </CtaButton>
    </section>
  )
}

export default MyNotes;