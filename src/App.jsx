import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useState } from "react";
import { getImages, getNextPage } from "./api/api";
import "./App.scss";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import Loader from "react-loader-spinner";
import { Button } from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

function App() {
  const [query, setQuery] = useState("");
  const [imageArr, setImageArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setQuery(e.target.query.value);
      setCurrentPage(1);
      setIsLoading(true);

      const res = await getImages(e.target.query.value);
      const totalImages = await res.totalHits;
      const imageArr = await res.hits;

      setMaxPage(getMaxPage(totalImages, imageArr.length));
      setImageArr(imageArr);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getMaxPage = (totalItems, itemsPerPage) => {
    return Math.ceil(totalItems / itemsPerPage);
  };

  const handleClickMore = async () => {
    try {
      setCurrentPage((prev) => prev + 1);
      setIsLoading(true);

      const res = await getNextPage(query, currentPage + 1);
      const images = await res.hits;

      setImageArr((prev) => [...prev, ...images]);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const handleClickImage = (currentImage) => {
    setCurrentImage(currentImage);

    toggleModal();
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery imageArr={imageArr} onClickImage={handleClickImage} />
      <Loader
        type="TailSpin"
        color="#3f51b5"
        height={100}
        width={100}
        visible={isLoading}
      />
      {/* Отображаем кнопку только если есть изображения на странице и 
            отрендеренна НЕпоследняя страница */}
      {imageArr.length > 0 && currentPage < maxPage && (
        <Button onClick={handleClickMore}>Load more</Button>
      )}

      {isShowModal && <Modal img={currentImage} onClose={toggleModal} />}
    </div>
  );
}

export default App;
