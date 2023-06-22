import React from "react";
import { useEffect } from "react";
import './Modal.css'

const Modal = ({largeImageURL, handleModalClose}) => {

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleModalClose(); 
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [handleModalClose])

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleModalClose(); 
    }
  }

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
          <img src={largeImageURL} alt="name" style={{ width: '830px', height: '600px' }} />
      </div>
    </div>
  );
}

export default Modal;