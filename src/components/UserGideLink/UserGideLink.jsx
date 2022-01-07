import { Link } from "react-router-dom";
import "./style.css";

export default function UserGideLink({ path, label }) {
  return (
    <Link to={path} className="gide-link text-decoration-none text-dark">
      {label}
    </Link>
  );
}
