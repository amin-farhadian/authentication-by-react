export default function PanelStructure({ children }) {
  return (
    <div className="col-sm-12 col-md-10 col-lg-8 mx-auto mt-3">
      <div id="panel-wrapper" className="bg-white">
        {children}
      </div>
    </div>
  );
}
