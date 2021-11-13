import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

export function ImageGallery({ imageArr, onClickImage }) {
  return (
    <ul className="ImageGallery">
      {imageArr.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          id={id}
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
