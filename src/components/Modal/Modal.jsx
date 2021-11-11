import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {
  componentDidMount() {
    const overlay = document.querySelector(".Overlay");

    window.addEventListener("keydown", this.handleKeydown);

    overlay.addEventListener("click", this.handleOverlayClick);
  }

  componentWillUnmount() {
    const overlay = document.querySelector(".Overlay");

    window.removeEventListener("keydown", this.handleKeydown);

    overlay.removeEventListener("click", this.handleOverlayClick);
  }

  handleKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = () => {
    this.props.onClose();
  };
  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.imgUrl} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
