"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdEventNote } from "react-icons/md";
import { useAppSelector } from 'store/store';

const Header: React.FC = () => {
  const [showMenuPopup, setShowMenuPopup] = useState<boolean>(false);
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);

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

      {
        isAuthenticated && (
          <div className='flex-none w-72'>
            <input 
              type='text'
              className='w-full px-4 py-3 bg-white rounded-md focus:ring-0 focus:outline-none text-base'
              placeholder='Search Here'
            />
          </div>
        )
      }
      
      {
        isAuthenticated && (
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
                    <div className='w-[200px] h-auto rounded-xl bg-white absolute top-full -right-3 mt-2 shadow-box transition-opacity duration-500 p-4 before:content-[""] before:absolute before:-top-1 before:right-6 before:w-4 before:h-4 before:rotate-45 before:bg-inherit'>
                      <ul className='list-none flex flex-col gap-2'>
                        <li className='bg-gray-100 text-base text-center text-slate-700 font-regular hover:bg-primary hover:text-white p-2 rounded-lg'>
                          <Link href="#">My Profile</Link>
                        </li>
                        <li className='bg-gray-100 text-base text-center text-slate-700 font-regular hover:bg-primary hover:text-white p-2 rounded-lg'>
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
        )
      }
      
      {
        !isAuthenticated && (
          <p className="text-white font-bold">Login Here</p>
        )
      }

    </header>
  )
}

export default Header;