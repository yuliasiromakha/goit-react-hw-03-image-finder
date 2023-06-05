import * as basicLightbox from 'basiclightbox'

const Modal = ((largeImageUrl, tags) => {

    basicLightbox.create(`
        <div className="overlay">
            <div className="modal">
                <img src=${largeImageUrl} alt="${tags}" />
            </div>
        </div>
`)
} )

export default Modal;