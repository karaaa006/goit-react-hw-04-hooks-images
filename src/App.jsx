import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Component } from "react";
import { getImages, getNextPage } from "./api/api";
import "./App.scss";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import Loader from "react-loader-spinner";
import { Button } from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    query: "",
    imageArr: [],
    currentPage: 1,
    maxPage: 0,
    loading: false,
    showModal: false,
    currentImage: {},
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      this.setState({
        query: e.target.query.value,
        currentPage: 1,
        loading: true,
      });

      const res = await getImages(e.target.query.value);
      const totalImages = await res.totalHits;
      const imageArr = await res.hits;

      const maxPage = Math.ceil(totalImages / imageArr.length);

      this.setState({
        maxPage,
        imageArr,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleClickMore = async () => {
    try {
      this.setState((prev) => {
        return {
          currentPage: prev.currentPage + 1,
          loading: true,
        };
      });
      const res = await getNextPage(
        this.state.query,
        this.state.currentPage + 1
      );
      const images = await res.hits;

      this.setState((prev) => {
        return {
          imageArr: [...prev.imageArr, ...images],
          loading: false,
        };
      });
    } catch (e) {
      console.log(e);
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleClickImage = (e) => {
    const currentImage = this.state.imageArr.find((img) => {
      return img.id === Number.parseInt(e.target.id);
    });

    this.setState({
      currentImage: currentImage,
    });

    this.toggleModal();
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          imageArr={this.state.imageArr}
          onClickImage={this.handleClickImage}
        />
        <Loader
          type="TailSpin"
          color="#3f51b5"
          height={100}
          width={100}
          visible={this.state.loading}
        />
        {/* Отображаем кнопку только если есть изображения на странице и 
            отрендеренна НЕпоследняя страница */}
        {this.state.imageArr.length > 0 &&
          this.state.currentPage < this.state.maxPage && (
            <Button onClick={this.handleClickMore}>Load more</Button>
          )}

        {this.state.showModal && (
          <Modal img={this.state.currentImage} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
