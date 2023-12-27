// import { useEffect, useState } from 'react';
// import NextImage from 'next/image';

// const Image = ({ src, alt}) => {
//     const [image, setImage] = useState(src);
//     const handleFallback = () => {
//         setImage("/fallback-image.png");
//     }

//     useEffect(() => {
//         setImage(src);
//     }, [src]);

//     return (
//         <NextImage 
//             src={image} 
//             {...rest}
//             onError={() => handleFallback()} 
//         />
//     )

// }

// export default Image;