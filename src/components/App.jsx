import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import './general.css';
export class App extends React.Component {
  state = {
    searchValue: '',
    showModal: false,
    modalImageURL: '',
  };
  handleFormSubmit = (searchValue) => {
    this.setState({ searchValue });
  };
  render() {
    return (
      <div className='general__css'>
        <SearchBar afterSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchValue={this.state.searchValue}
          // onImageClick={this.handleOpenModal}
        />
        {this.state.showModal && (
          <Modal
            imageURL={this.state.modalImageURL}
          />
        )}
      </div>
    );
  }
}