import "./style.css";

export default function Button({
  type,
  colorClass,
  label,
  onClick,
  isEnable = true,
}) {
  return (
    <button
      type={type}
      className={`btn custom-btn btn-${colorClass}`}
      onClick={onClick}
      disabled={!isEnable}
    >
      {label}
    </button>
  );
}
