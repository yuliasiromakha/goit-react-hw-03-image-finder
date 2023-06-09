import React from "react";
import './Modal.css';
class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      this.props.handleModalClose(); 
    }
  }

render() {
    const { largeImageURL } = this.props;
    return (
      <div className="overlay" onClick={this.props.handleModalClose}>
        <div className="modal">
            <img src={largeImageURL} alt="name" style={{ width: '830px', height: '600px' }} />
        </div>
      </div>
    );
  }
  
}
// this.props.handleModalClose
export default Modal; 