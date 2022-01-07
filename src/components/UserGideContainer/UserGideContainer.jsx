export default function UserGideContainer({ children, spacingClasses = "" }) {
  return (
    <div className={`user-gide text-center ${spacingClasses}`}>{children}</div>
  );
}
