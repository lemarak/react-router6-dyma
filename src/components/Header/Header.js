import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = ({ setPage }) => {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className={`flex-fill ${styles.title}`}>
        <Link to="/">
          <strong>React-router</strong>
        </Link>
      </div>
      <ul className={styles.headerList}>
        <NavLink
          end
          className={({ isActive }) => (isActive ? "link-active" : "")}
          to="/"
        >
          Homepage
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "")}
          to="/profile"
        >
          Profile
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
