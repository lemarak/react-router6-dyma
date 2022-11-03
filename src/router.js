import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
import ProfileData from "./pages/Profile/pages/ProfileData/ProfileData";
import ProfileOverview from "./pages/Profile/pages/ProfileOverview/ProfileOverview";
import { homepageLoader } from "./loaders/homepageLoader";
import { routeLoader } from "./loaders/routeLoader";
import { profileLoader } from "./loaders/profileLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: routeLoader,
    children: [
      {
        index: true,
        errorElement: <ErrorPage />,
        loader: homepageLoader,
        element: <Homepage />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
        loader: profileLoader,
        children: [
          {
            index: true,
            element: <ProfileOverview />,
          },
          {
            path: "data",
            element: <ProfileData />,
          },
        ],
      },
      { path: "/profile/:id/*", element: <Profile /> },
    ],
  },
]);
