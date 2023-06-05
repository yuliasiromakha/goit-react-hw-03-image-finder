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
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchValue !== this.props.searchValue) {
      const BASE_URL = 'https://pixabay.com/api/';
      const API_KEY = '35566788-2396923f3520db2f530781152';

      this.setState({ status: 'pending' });

      fetch(`${BASE_URL}?q=${this.props.searchValue}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } 
        
          return Promise.reject(new Error("We're sorry, there are no pictures for your search"))
        })
        .then(data => {
          console.log(data);
          this.setState({ search: data, status: 'resolved' });
        })
        .catch(error => {
          console.error(error);
          this.setState({ error, status: 'rejected' })
        })
    }
  }

  render() {
    const { search, status, error } = this.state;

    if (status === 'idle') {
        return <p>You can look for pictures now!</p>
    }

    if (status === 'pending') {
        return <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="rgb(123, 104, 238)" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
         />
    }

    if (status === 'rejected') {
        return <h1>{error.message}</h1>
    }

    if (status === 'resolved') {

        if (search && search.hits.length === 0) {
            return <p>Sorry, there are no pictures for your search.</p>;
          }
          
        return (
          <ul className="gallery">
            {search &&
              search.hits.map(item => (
                <ImageGalleryItem
                  key={item.id}
                  imageUrl={item.webformatURL}
                  altText={item.tags}
                />
              ))}
          </ul>
        );
      }
      
      return <Modal largeImage={this.search.hits.largeImageUrl} tags={this.search.hits.tags}/>;
      
  } 
}

export default ImageGallery;