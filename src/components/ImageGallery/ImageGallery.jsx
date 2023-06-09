import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Modal from "components/Modal/Modal";
import { ThreeDots } from "react-loader-spinner";
import './ImageGallery.css'

class ImageGallery extends React.Component {
  render() {
    const { search, status, error, showModal, modalImageURL } = this.props;

    return (
      <>
        {status === "idle" && <p>You can look for pictures now!</p>}

        {status === "pending" && (
          <ThreeDots
            height={80}
            width={80}
            color="rgb(123, 104, 238)"
            ariaLabel="three-dots-loading"
          />
        )}

        {status === "rejected" && <h1>{error.message}</h1>}

        {status === "resolved" && (
          <ul className="gallery">
            {search.hits.map((item) => (
              <ImageGalleryItem
                toggleModal={this.props.toggleModal}
                key={item.id}
                imageUrl={item.webformatURL}
                altText={item.tags}
                largeImageURL={item.largeImageURL}
              />
            ))}
          </ul>
        )}
        
        {showModal && <Modal largeImageURL={modalImageURL} handleModalClose={this.props.toggleModal} />}
      </>
    );
  }
}

export default ImageGallery;
// onClick={this.props.handleModalClose}