import PropTypes from "prop-types";

export function ImageGalleryItem({
  tags,
  webformatURL,
  onClick,
  largeImageURL,
}) {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onClick({ largeImageURL, tags })}
    >
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  werformatURL: PropTypes.string,
  onClick: PropTypes.func,
};
