import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { fetchImages } from 'API';
import './general.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImageURL, setModalImageURL] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const fetchImagesData = async (searchValue, page) => {
      try {
        const data = await fetchImages(searchValue, page);
        if (!data.totalHits) {
          alert('No pictures were found');
          setStatus('resolved');
          setShowBtn(false);
          return;
        }

        setImages((prevImages) => [...prevImages, ...data.hits]);
        setStatus('resolved');
        setShowBtn(page < Math.ceil(data.totalHits / 12));
      } catch (error) {
        console.error(error);
        setError(error);
        setStatus('rejected');
      }
    };
    
    if (searchValue !== '' || page !== 1) {
      fetchImagesData(searchValue, page);
    }
  }, [searchValue, page]);

  const handleFormSubmit = (searchValue) => {
    setSearchValue(searchValue)
    setStatus('pending');
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1 );
  };
  
  const toggleModal = (modalImageURL) => {
    setShowModal((prevShowModal) => !prevShowModal)
    setModalImageURL(modalImageURL)
  };

  return (
    <div className="general__css">
      <SearchBar afterSubmit={handleFormSubmit} />

      {status === 'pending' && <Loader/>}

      {status === 'rejected' && <p>{error.message}</p>}

      {images.length > 0 && (
          <ImageGallery
          images={images}
          showModal={showModal}
          modalImageURL={modalImageURL}
          toggleModal={toggleModal}
        />)}
        
        {showBtn && <Button onClick={handleLoadMore} />}
        
    </div>
  );

}

export default App;