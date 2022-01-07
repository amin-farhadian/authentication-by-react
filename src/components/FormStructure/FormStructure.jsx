import FormTitle from "../FormTitle";

export default function FormStructure({ formTitle, children }) {
  return (
    <div className="col-sm-12 col-md-8 col-lg-5 mx-auto mt-3">
      <div className="bg-white rounded-bottom shadow pb-4 mb-4">
        <FormTitle title={formTitle} />
        {children}
      </div>
    </div>
  );
}
