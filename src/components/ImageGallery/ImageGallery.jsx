import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { ThreeDots } from 'react-loader-spinner';
import './ImageGallery.css';


class ImageGallery extends Component {
    render() {
      const { search, status, error, showModal, modalImageURL, onLoadMore, toggleModal } = this.props;
      const imagesLoaded = search && search.hits && search.hits.length > 0;
      const noPicturesFound = search && search.hits && search.hits.length === 0;
  
      return (
        <div>
          {status === 'pending' && <ThreeDots color="rgb(123, 104, 238)"/>}
          {status === 'rejected' && <p>{error}</p>}
          {status === 'resolved' && noPicturesFound && <p>No pictures found</p>}
  
          {status === 'resolved' && (
            <>
              <ul className="gallery">
                {search &&
                  search.hits &&
                  search.hits.map((item) => (
                    <ImageGalleryItem
                      toggleModal={toggleModal}
                      key={item.id}
                      imageUrl={item.webformatURL}
                      altText={item.tags}
                      largeImageURL={item.largeImageURL}
                    />
                  ))}
              </ul>
  
              {imagesLoaded && <Button onClick={onLoadMore} />}
            </>
          )}
  
          {showModal && <Modal largeImageURL={modalImageURL} handleModalClose={toggleModal} />}
        </div>
      );
    }
  }
  
  export default ImageGallery;