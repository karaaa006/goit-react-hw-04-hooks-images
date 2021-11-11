export function Button({ children, onClick }) {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}
