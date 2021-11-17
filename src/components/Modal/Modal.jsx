import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");

export default function Modal({ onClose, img }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return window.removeEventListener("keydown", handleKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeydown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    const overlay = document.querySelector(".Overlay");

    if (e.target === overlay) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img src={img.largeImageURL} alt={img.tags} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  img: PropTypes.object,
};
