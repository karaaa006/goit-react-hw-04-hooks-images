import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export function ImageGallery({ imageArr, onClickImage }) {
  return (
    <ul className="ImageGallery">
      {imageArr.map(({ largeImageURL, id, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
          id={id}
          onClick={onClickImage}
        />
      ))}
    </ul>
  );
}
