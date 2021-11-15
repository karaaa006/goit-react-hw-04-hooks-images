import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

export function ImageGallery({ imageArr, onClickImage }) {
  return (
    <ul className="ImageGallery">
      {imageArr.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClickImage}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  imageArr: PropTypes.arrayOf(PropTypes.object),
  onClickImage: PropTypes.func,
};
