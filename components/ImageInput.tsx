import React from 'react'

const ImageInput = () => {
  return (
    <div className='bg-yellow-50'>
      <input 
          type='file' 
          className='w-52 h-52 rounded-lg opacity-0 bg-blue-200'
      />
    </div>
  )
}

export default ImageInput;