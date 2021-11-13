import PropTypes from "prop-types";

export function Button({ children, onClick }) {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
