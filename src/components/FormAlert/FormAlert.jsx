export default function FormAlert({ alertText, alertColorClass }) {
  return (
    <div
      className={`alert alert-${alertColorClass} text-center mx-auto`}
      style={{ width: "85%" }}
    >
      {alertText}
    </div>
  );
}
