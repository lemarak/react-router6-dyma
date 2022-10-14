import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = ({ setPage }) => {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <Link to="/">
          <strong>React-router</strong>
        </Link>
      </div>
      <ul className={styles.headerList}>
        <Link className="mr-15" to="/">
          Homepage
        </Link>
        <Link className="mr-15" to="/profile">
          Profile
        </Link>
        <Link className="mr-15" to="/pouet">
          ???
        </Link>
      </ul>
    </header>
  );
};

export default Header;
