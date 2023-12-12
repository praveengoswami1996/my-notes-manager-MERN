import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const CtaButton = ({ children, className }: { 
    children: ReactNode 
    className: string
}) => {
  return (
    <button 
        className={twMerge(`px-10 py-3 bg-secondary text-white rounded-xl`, className)}
    >
        { children }
    </button>
  )
}

export default CtaButton;