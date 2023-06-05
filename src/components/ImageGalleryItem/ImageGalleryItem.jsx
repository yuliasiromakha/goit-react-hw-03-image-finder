const ImageGalleryItem = ({ imageUrl, altText, toggleModal }) => {
  return (
    <li className="gallery-item" onClick={toggleModal}>
      <img src={imageUrl} alt={altText} width={300} height={200}  />
    </li>
  );
};



export default ImageGalleryItem;
