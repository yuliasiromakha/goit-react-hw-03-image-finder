// import React from 'react';
// import * as basicLightbox from 'basiclightbox';

// class Modal extends React.Component {
//   modalRef = React.createRef();

//   componentDidMount() {
//     this.showModal();
//   }

//   showModal() {
//     const { imageUrl, altText, toggleModal } = this.props;

//     const modalContent = `
//       <div className="overlay">
//         <div className="modal">
//           <img src="${imageUrl}" alt="${altText}" />
//         </div>
//       </div>
//     `;

//     const lightbox = basicLightbox.create(modalContent, {
//       onClose: toggleModal,
//     });

//     lightbox.show();
//   }

//   render() {
//     return null;
//   }
// }

// export default Modal;


import * as basicLightbox from 'basiclightbox'

const Modal = ((largeImageUrl, tags) => {

    basicLightbox.create(`
        <div className="overlay">
            <div className="modal">
              <p>modal</p>
            </div>
        </div>
`)
} )

export default Modal;