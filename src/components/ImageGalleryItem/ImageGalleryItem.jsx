// import React from 'react';

// class ImageGalleryItem extends React.Component {
//   handleClick = () => {
//     const { imageUrl, altText, toggleModal } = this.props;
//     toggleModal(imageUrl, altText);
//   };

//   render() {
//     const { imageUrl, altText } = this.props;
//     return (
//       <li className="gallery-item" onClick={this.handleClick}>
//         <img src={imageUrl} alt={altText} width={300} height={200}/>
//       </li>
//     );
//   }
// }

// export default ImageGalleryItem;

const ImageGalleryItem = ({ imageUrl, altText, toggleModal }) => {
  return (
    <li className="gallery-item">
      <img src={imageUrl} alt={altText} width={300} height={200} onClick={toggleModal} />
    </li>
  );
};



export default ImageGalleryItem;
