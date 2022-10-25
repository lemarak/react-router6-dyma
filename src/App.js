import {
  Outlet,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import styles from "./App.module.scss";
import { useEffect } from "react";

// import seedRecipes from "./data/seed";

// seedRecipes();

function App() {
  // const location = useLocation();
  const navigation = useNavigation();
  const user = useLoaderData();

  console.log("user", user);

  useEffect(() => {
    console.log(navigation);
  }, [navigation]);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      {navigation.state === "loading" && (
        <h2>
          Chargement...{" "}
          {navigation.location.pathname === "/" && <strong>Homepage</strong>}
        </h2>
      )}
      <div className="flex-fill container d-flex flex-column p-20">
        <Outlet context={{ user }} />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
