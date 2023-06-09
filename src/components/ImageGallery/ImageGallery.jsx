import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Modal from "components/Modal/Modal";
import './ImageGallery.css'
import { ThreeDots } from  'react-loader-spinner'
class ImageGallery extends React.Component {
  state = {
    search: null,
    error: null,
    status: 'idle',
    showModal: false,
    largeImageURL: '',
  };

toggleModal = (largeImageURL) => {
        console.log(largeImageURL);
    console.log('this is toggle');
    this.setState(({showModal}) => ({
        showModal: !showModal,
      largeImageURL: largeImageURL,
    }));
  };
  handleBackdropClick = () => {
    this.setState({ showModal: false });
  };
  
  handleModalClose = () => {
    this.setState({ showModal: false });
  }
  
  
//   componentDidUpdate(prevProps) {
//     if (prevProps.searchValue !== this.props.searchValue) {
//       const BASE_URL = 'https://pixabay.com/api/';
//       const API_KEY = '35566788-2396923f3520db2f530781152';
//       this.setState({ status: 'pending' });
//       fetch(`${BASE_URL}?q=${this.props.searchValue}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           } 
        
//           return Promise.reject(new Error("We're sorry, there are no pictures for your search"))
//         })
//         .then(data => {
//           console.log(data);
//         //   console.log(this.search.hits.largeImageURL);
//           this.setState({ search: data, status: 'resolved' });
//         })
//         .catch(error => {
//           console.error(error);
//           this.setState({ error, status: 'rejected' })
//         })
//     }
//   }
  render() {
    const { search, status, error, showModal, largeImageURL } = this.state;
          
    return (
      <>
      {status === 'idle' && <p>You can look for pictures now!</p>}

      {status === 'pending' &&         
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="rgb(123, 104, 238)" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
         />}
        
        {status === 'rejected' && <h1>{error.message}</h1>}

        {/* {status === 'resolved' && 
                   <ul className="gallery">
                   {search && this.props.search.hits.map(item => (
                       <ImageGalleryItem
                         toggleModal={this.toggleModal}
                         key={item.id}
                         imageUrl={item.webformatURL}
                         altText={item.tags}
                         largeImageURL={item.largeImageURL}
                       />
                     ))}
                 </ul>} */}
                 
        {status === 'resolved' && (
            <ul className="gallery">
              {search.search.hits.map(item => (
                <ImageGalleryItem
                  toggleModal={this.toggleModal}
                  key={item.id}
                  imageUrl={item.webformatURL}
                  altText={item.tags}
                  largeImageURL={item.largeImageURL}
                />
              ))}
            </ul>
            )}


{/* 
        {search.hits.length === 0 && <p>Sorry, there are no pictures for your search.</p>} */}

          {showModal && (
          <div className="overlay" onClick={this.handleBackdropClick}>
            <div className="modal">
              <Modal
                largeImageURL={largeImageURL}
                handleModalClose={this.handleModalClose} 
              />
            </div>
          </div>
        )}
          
          </>
        );
      }
      
  } 

export default ImageGallery;