import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdEventNote } from "react-icons/md";

const Header = () => {
  return (
    <header className='px-20 py-10 h-20 bg-[#0081a7] flex items-center justify-between'>
      <Link href={"/"}>
        <div className='flex items-center justify-start gap-2 text-white'>
          <span>
            <MdEventNote className="text-4xl"/>
          </span>    
          <span className='text-base font-semibold'>My Notes Manager</span>
        </div>
      </Link>

      <div className='flex-none w-72'>
        <input 
          type='text'
          className='w-full px-4 py-3 bg-white rounded-md focus:ring-0 focus:outline-none text-base'
          placeholder='Search Here'
        />
      </div>

      <div className='flex items-center justify-end gap-5'>
        <Link href={"/my-notes"}>
          <span className='text-white text-sm font-semibold'>My Notes</span>
        </Link>

        <div className='flex items-center justify-start gap-3'>
          <div className='w-[36px] h-[36px] rounded-full overflow-hidden relative'>
            <Image 
              src="/user.png"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className='flex flex-col items-start'>
            <span className='text-lg font-bold text-white tracking-widest'>Praveen Goswami</span>
            <span className='text-[11px] text-white'>Welcome Back</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;