"use client";
import { useState } from 'react';
import CtaButton from './CtaButton';
import Link from 'next/link';
import React from 'react';

interface AccordionItem {
    id: string;
    label: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

function Accordion({ items }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | -1>(-1);

  const handleClick = (nextIndex: number) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    window.confirm("Are you sure?");
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    return (
      <div key={item.id} className='w-full'>
        <div
          className="flex justify-between p-3 bg-gray-100 items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          <div className='flex items-center justify-end gap-3'>
            <Link 
              href={`/my-notes/${item.id}`} 
              onClick={(event) => event.stopPropagation()}
              className='flex-none flex items-center justify-center border font-semibold border-primary bg-primary text-white text-xs rounded-md px-3 py-2'
            >
                EDIT
            </Link>
            <CtaButton 
                danger 
                className='text-xs rounded-md px-3 py-2'
                onClick={handleDelete}
            >
                DELETE
            </CtaButton>
          </div>
        </div>
        {isExpanded && <div className="p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="w-full flex flex-col gap-2">{renderedItems}</div>;
}

export default Accordion;