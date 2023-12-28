import React from 'react';
import { CustomInputFieldProps } from 'types';

const InputField: React.FC<CustomInputFieldProps> = ({ placeholder = "Enter Your Placeholder Text", value, onChange, error, label }) => {
  return (
    <div className="w-full flex flex-col gap-1">
        <label htmlFor={label} className='text-base text-gray-600 font-medium'>{ label }</label>
        <input 
          type="text"
          value={value}
          onChange={onChange}
          className={`w-full bg-transparent border-2 border-gray-400 p-3 focus:border-primary focus-visible:border-primary focus:ring-0 focus:outline-none text-base font-medium text-slate-600 ${error ? "border-red-600": ""}`}
          placeholder={placeholder}
          id={label}
        />
        <span className="text-red-600 text-sm inline-flex items-center justify-end min-h-[1.2rem] font-semibold">
          {error}
        </span>
    </div>
  )
}

export default InputField;