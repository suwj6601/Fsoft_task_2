import "./style.css";

const LoadingAnimation = () => {
  return (
    <div className="loading">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loading1"></div>
      <div className="background"></div>
    </div>
  );
};

export default LoadingAnimation;
