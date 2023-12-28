import React, { ChangeEvent, useState } from 'react';
import Image from './Image';
import CameraIcon from 'core/icons/CameraIcon';

const ImageInput: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file || null);

    if(file) {
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
    }
  }

  return (
    <div className='relative w-52 h-52 rounded-xl overflow-hidden group'>
      {
        selectedImage ? (
          <Image 
            src={imageSrc || ""}
            alt={"Uploaded User Avatar"}
            fill
            className='object-cover'
          />
        ): (  
          <Image 
            src={"/avatar-placeholder.jpg"}
            alt={"Avatar Placeholder Image"}
            fill
            className='object-cover'
          />
        )
      }
      
      {/* Overlay Starts */}
      <div className="absolute bg-black bg-opacity-60 w-full h-full invisible group-hover:visible">
        <div className="w-full h-full relative flex items-center justify-center">
          <div className='flex-none'>
            <CameraIcon className="text-white text-9xl"/>
          </div>
          
          <input 
            type="file" 
            onChange={handleFileChange}
            className="bg-transparent opacity-0 absolute w-full h-full"
          />
        </div>  
      </div>
      {/* Overlay Ends */}
    </div>
  )
}

export default ImageInput;