import "./CloseBtn.scss";

const CloseBtn = ({ onClick, className }) => {
  return (
    <span
      className={`x-line ${className && className}`}
      onClick={onClick}
    ></span>
  );
};

export default CloseBtn;
