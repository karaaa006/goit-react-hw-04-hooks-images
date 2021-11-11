export function ImageGalleryItem({ largeImageURL, id, webformatURL, onClick }) {
  return (
    <li className="ImageGalleryItem" id={id}>
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt=""
        data-large={largeImageURL}
        onClick={onClick}
      />
    </li>
  );
}
