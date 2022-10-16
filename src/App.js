import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import styles from "./App.module.scss";
import { useEffect } from "react";

// import seedRecipes from "./data/seed";

// seedRecipes();

function App() {
  // const location = useLocation();
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill container d-flex flex-column p-20">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
