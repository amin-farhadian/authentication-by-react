import MainLayout from "../../Layout/MainLayout";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <p className="text-white text-center" style={{ fontSize: "35px" }}>
          هیچ محتوایی در آدرس وارد شده وجود ندارد!
        </p>
      </div>
    </MainLayout>
  );
}
