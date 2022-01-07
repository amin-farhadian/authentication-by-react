export default function PanelTitle({ name }) {
  return (
    <h2
      className="bg-danger text-white py-3 text-center"
      style={{ fontSize: "26px" }}
    >
      به پنل کاربری خودت خوش آمدی <span className="name">{name}</span> عزیز
    </h2>
  );
}
