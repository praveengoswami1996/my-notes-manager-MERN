import React from 'react';
import { MdEventNote } from "react-icons/md";

const Header = () => {
  return (
    <header className='px-20 py-10 h-20 bg-[#0081a7] flex items-center'>
        <div className='flex items-center justify-start gap-2 text-white'>
          <span>
            <MdEventNote className="text-4xl"/>
          </span>    
          <span className='text-base font-semibold'>My Notes Manager</span>
        </div>
        
    </header>
  )
}

export default Header;