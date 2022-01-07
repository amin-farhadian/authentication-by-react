export default function ButtonsContainer({ children }) {
  return (
    <div className="d-flex justify-content-around py-4">
      {children}
    </div>
  );
}
