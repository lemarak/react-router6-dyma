import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <NavLink to="/">
          <strong> React-router </strong>
        </NavLink>
      </div>
      <ul className={styles.headerList}>
        <NavLink end to="/">
          Homepage
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "")}
          to="/profile/123?age=42"
        >
          Profile
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
