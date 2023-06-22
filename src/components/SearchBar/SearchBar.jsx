import { useState } from "react";
import React from "react";
import './SearchBar.css'

const SearchBar = ({afterSubmit}) => {

  const [searchInput, setSearchInput] = useState('')

  const handleNameChange = (event) => {
  
    setSearchInput(event.currentTarget.value.toLowerCase())
  }

  const onSubmit = event => {
    event.preventDefault();
    if (searchInput.trim() === '') {
      alert('Please put in a valid')
      return
    }
    afterSubmit(searchInput);
  }

  return (
    <header className="searchbar">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchInput}
          onChange={handleNameChange}
        />

        <button type="submit" className="button" style={{ marginLeft: 15 }}>
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
  
}

export default SearchBar;