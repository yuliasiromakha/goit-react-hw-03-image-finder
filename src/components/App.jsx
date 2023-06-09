import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';
import './general.css';

export class App extends React.Component {
  state = {
    searchValue: '',
    search: null,
    showModal: false,
    modalImageURL: '',
    status: 'idle',
    error: null,
  };

  handleFormSubmit = (searchValue) => {
    this.setState({ searchValue, status: 'pending' });

    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '35566788-2396923f3520db2f530781152';

    fetch(
      `${BASE_URL}?q=${searchValue}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("We're sorry, there are no pictures for your search");
      })
      .then((data) => {
        this.setState({ search: data, status: 'resolved' });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error, status: 'rejected' });
      });
  };

  toggleModal = (modalImageURL) => {
    this.setState({ showModal: !this.state.showModal, modalImageURL });
  };

  render() {
    const { search, showModal, modalImageURL, status, error } = this.state;

    return (
      <div className="general__css">
        <SearchBar afterSubmit={this.handleFormSubmit} />
        <ImageGallery
          search={search}
          showModal={showModal}
          modalImageURL={modalImageURL}
          toggleModal={this.toggleModal}
          status={status}
          error={error}
        />
        {/* {showModal && <Modal imageURL={modalImageURL} />} */}
      </div>
    );
  }
}

export default App;

