import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import './general.css';
export class App extends React.Component {
  state = {
    searchValue: '',
    search: null,
    showModal: false,
    modalImageURL: '',
    // page: '1',
  };

handleFormSubmit = (searchValue) => {
  this.setState({ searchValue: searchValue });
  // this.setState({ searchValue});
};

  componentDidUpdate(prevProps) {
    // if (prevProps.searchValue !== this.props.searchValue) {
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
        //   console.log(this.search.hits.largeImageURL);
          this.setState({ search: data, status: 'resolved' });
        })
        .catch(error => {
          console.error(error);
          this.setState({ error, status: 'rejected' })
        })
    }
  }

  render() {
    return (
      <div className='general__css'>
        <SearchBar afterSubmit={this.handleFormSubmit} />
        <ImageGallery search={this.state.search} />
        {this.state.showModal && (
          <Modal
            imageURL={this.state.modalImageURL}
          />
        )}
      </div>
    );
  }
}