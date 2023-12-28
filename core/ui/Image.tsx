import React, { useEffect, useState } from 'react';
import NextImage, { ImageProps } from 'next/image';

const Image: React.FC<ImageProps> = ({ src, alt, ...rest}) => {
    const [image, setImage] = useState(src);
    const handleFallback = () => {
        setImage("/avatar-placeholder.png");
    }

    useEffect(() => {
        setImage(src);
    }, [src]);

    return (
        <NextImage 
            src={image} 
            alt={alt}
            {...rest}
            onError={() => handleFallback()} 
        />
    )

}

export default Image;