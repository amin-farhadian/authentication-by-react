import "./style.css";

export default function MainLayout({ children }) {
  return (
    <div id="wrapper" className="container-fluid">
      <div className="row h-100">
        <div className="col-12 h-100">
          <div className="container h-100">
            <div className="row h-100">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
