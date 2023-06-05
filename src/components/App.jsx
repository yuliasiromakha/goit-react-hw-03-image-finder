import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import './general.css';

export class App extends React.Component {
  state = {
    searchValue: '',
  };

  handleFormSubmit = (searchValue) => {
    this.setState({ searchValue }, () => {
      // console.log(this.state);
    });
  };

  render() {
    return (
      <div className='general__css'>
        <SearchBar afterSubmit={this.handleFormSubmit} />
        <ImageGallery searchValue={this.state.searchValue} />
      </div>
    );
  }
}
