import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages } from 'API';
import './general.css';

export class App extends React.Component {
  state = {
    searchValue: '',
    search: null,
    showModal: false,
    modalImageURL: '',
    status: 'idle',
    error: null,
    page: 1,
  };

  handleFormSubmit = (searchValue) => {
    this.setState({ searchValue, status: 'pending', page: 1 });
    this.fetchImagesData(searchValue, 1);
  };

  handleLoadMore = () => {
    const { searchValue, page } = this.state;
    const nextPage = page + 1;

    this.setState({ page: nextPage });
    this.fetchImagesData(searchValue, nextPage);
  };

  fetchImagesData = (searchValue, page) => {
    fetchImages(searchValue, page)
      .then((data) => {
        this.setState((prevState) => ({
          search: {
            ...prevState.search,
            hits: [...(prevState.search?.hits || []), ...data.hits],
          },
          status: 'resolved',
        }));
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
          onLoadMore={this.handleLoadMore}
        />
      </div>
    );
  }
}

export default App;
