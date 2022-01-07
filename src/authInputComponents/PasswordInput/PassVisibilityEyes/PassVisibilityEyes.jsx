import "./style.css";

export default function PassVisibilityEyes({
  isVisible,
  changeVisibilityAction,
}) {
  return (
    <span
      className="eye position-absolute d-flex align-items-center"
      onClick={() => {
        changeVisibilityAction();
      }}
    >
      <i className={`fas fa-eye ${isVisible && "d-none"}`}></i>
      <i className={`fas fa-eye-slash ${!isVisible && "d-none"}`}></i>
    </span>
  );
}
