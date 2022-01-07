import "./style.css";

export default function PasswordAlert({ alertText, isVisible }) {
  return (
    <div
      className={`custom-password-alert px-2 py-1 rounded-bottom clearfix ${
        !isVisible && "d-none"
      }`}
    >
      <i className="fas fa-exclamation-triangle float-start"></i>
      <p className="text-justify float-start">{alertText}</p>
    </div>
  );
}
