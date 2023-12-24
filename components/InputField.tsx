const InputField = ({ placeholder = "Enter Your Placeholder Text" } : {
    placeholder: string
}) => {
  return (
    <div className="w-full">
        <input 
            type="text"
            className="w-full bg-transparent border-2 border-gray-400 p-3 focus:border-primary focus-visible:border-primary focus:ring-0 focus:outline-none text-base font-medium text-slate-600"
            placeholder={placeholder}
        />
        <span className="text-red-600 text-sm font-semibold leading-none">Show Form Validation Errors Here</span>
    </div>
  )
}

export default InputField;