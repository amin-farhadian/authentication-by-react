export default function PanelInfo({ labelKey, labelValue, badgeColorClass }) {
  return (
    <p className="mb-3" style={{ fontSize: "18px" }}>
      {labelKey} :{" "}
      <span className={`badge bg-${badgeColorClass} p-2`}>{labelValue}</span>
    </p>
  );
}
