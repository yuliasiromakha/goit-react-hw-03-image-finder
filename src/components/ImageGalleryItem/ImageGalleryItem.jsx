import React from 'react';

const ImageGalleryItem = ({ imageUrl, altText }) => {
  return (
    <li className="gallery-item">
      <img src={imageUrl} alt={altText} width={300} height={200}/>
    </li>
  );
};

export default ImageGalleryItem;
