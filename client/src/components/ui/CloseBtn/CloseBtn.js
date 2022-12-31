import "./CloseBtn.scss";

const CloseBtn = ({ onClick, className }) => {
  return (
    <div className={`exit-icon ${className && className}`} onClick={onClick}>
      <span className="x-line"></span>
    </div>
  );
};

export default CloseBtn;
