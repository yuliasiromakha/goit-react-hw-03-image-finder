// import React, { Component } from 'react';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Modal from 'components/Modal/Modal';
// import './ImageGallery.css';


// class ImageGallery extends Component {
//     render() {
//       const { search, showModal, modalImageURL, toggleModal } = this.props;
//       // const imagesLoaded = search && search.hits && search.hits.length > 0;
  
//       return (
//         <div>
//             <>
//               <ul className="gallery">
//                 {search &&
//                   search.hits &&
//                   search.hits.map((item) => (
//                     <ImageGalleryItem
//                       toggleModal={toggleModal}
//                       key={item.id}
//                       imageUrl={item.webformatURL}
//                       altText={item.tags}
//                       largeImageURL={item.largeImageURL}
//                     />
//                   ))}
//               </ul>
  
//             </>
  
//           {showModal && <Modal largeImageURL={modalImageURL} handleModalClose={toggleModal} />}
//         </div>
//       );
//     }
//   }
  
//   export default ImageGallery;

import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import './ImageGallery.css';

class ImageGallery extends Component {
  render() {
    const { images, showModal, modalImageURL, toggleModal } = this.props;

    return (
      <div>
        <>
          <ul className="gallery">
            {images.map((item) => (
              <ImageGalleryItem
                toggleModal={toggleModal}
                key={item.id}
                imageUrl={item.webformatURL}
                altText={item.tags}
                largeImageURL={item.largeImageURL}
              />
            ))}
          </ul>
        </>

        {showModal && <Modal largeImageURL={modalImageURL} handleModalClose={toggleModal} />}
      </div>
    );
  }
}

export default ImageGallery;
