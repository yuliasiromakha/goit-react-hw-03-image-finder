import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { fetchImages } from 'API';
import './general.css';

export class App extends React.Component {
  state = {
    searchValue: '',
    images: [],
    showModal: false,
    modalImageURL: '',
    status: 'idle',
    error: null,
    page: 1,
    showBtn: false, 
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchValue;
    const nextQuery = this.state.searchValue;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.fetchImagesData(nextQuery, nextPage);
    }
  }

  handleFormSubmit = (searchValue) => {
    this.setState({ searchValue, status: 'pending', page: 1, images: [] }); 
  };
  

  handleLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  fetchImagesData = (searchValue, page) => {
    fetchImages(searchValue, page)
      .then((data) => {
        this.setState((prevState) => ({
          images:[...prevState.images,...data.hits],
          status: 'resolved',
          showBtn: this.state.page < Math.ceil(data.totalHits / 12),
        }))
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
    const { images, showModal, modalImageURL } = this.state;
    const imagesLoaded = images.length > 0;

    return (
      <div className="general__css">
        <SearchBar afterSubmit={this.handleFormSubmit} />

        {this.state.status === 'pending' && <Loader/>}

        {this.state.status === 'rejected' && <p>{this.state.error.message}</p>}

        {this.state.status === 'resolved' && this.state.showBtn && (
            <ImageGallery
            images={images}
            showModal={showModal}
            modalImageURL={modalImageURL}
            toggleModal={this.toggleModal}
          />)}
          
          {imagesLoaded && <Button onClick={this.handleLoadMore} />}
          
      </div>
    );
  }
}

export default App;
