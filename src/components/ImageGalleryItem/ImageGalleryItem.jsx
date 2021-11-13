import PropTypes from "prop-types";

export function ImageGalleryItem({ tags, id, webformatURL, onClick }) {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        id={id}
        onClick={onClick}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  id: PropTypes.number,
  werformatURL: PropTypes.string,
  onClick: PropTypes.func,
};
