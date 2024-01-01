"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdEventNote } from "react-icons/md";

const Header: React.FC = () => {
  const [showMenuPopup, setShowMenuPopup] = useState<boolean>(false);

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
          <div className='relative'>
            <button 
              type='button'
              onClick={() => setShowMenuPopup(!showMenuPopup)}
              className='block rounded-full overflow-hidden relative'
            >
              <Image 
                src="/user.png"
                alt="User Avatar"
                width={36}
                height={36}
                className='rounded-full'
              />
            </button>
            {
              showMenuPopup && (
                <div className='w-[200px] h-[150px] rounded-xl bg-white absolute top-full right-3 mt-1 shadow-box transition-opacity duration-500'>
                  <ul className='list-none'>
                    <li>
                      <Link href="#">My Profile</Link>
                    </li>
                    <li>
                      <Link href="#">logout</Link>
                    </li>
                  </ul>
                </div>
              )
            }
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