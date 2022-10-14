import { useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import styles from "./App.module.scss";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
import { Outlet } from "react-router-dom";
// import seedRecipes from "./data/seed";

// seedRecipes();

function App() {
  const [page, setPage] = useState("homepage");

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill container d-flex flex-column p-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
