import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import {
  Outlet,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
// import { useEffect } from "react";

function App() {
  const navigation = useNavigation();
  const user = useLoaderData();

  // useEffect(() => {
  //   console.log(navigation);
  // }, [navigation]);

  // console.log("user", user);
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      {navigation.state === "loading" && (
        <h3>
          Chargement {navigation.location.pathname === "/" && "des recettes..."}
        </h3>
      )}
      <div className="flex-fill">
        <Outlet context={{ user }} />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
export default App;
