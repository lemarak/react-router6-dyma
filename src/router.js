import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Homepage from "./pages/Homepage/Homepage";
import ProfileData from "./pages/Profile/pages/ProfileData/ProfileData";
import ProfileOverview from "./pages/Profile/pages/ProfileOverview/ProfileOverview";
import Profile from "./pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/profile/:id/:name",
        element: <Profile />,
        children: [
          { index: true, element: <ProfileOverview /> },
          { path: "data", element: <ProfileData /> }, // chemin relatif
        ],
      },
      {
        path: "/profile/*",
        element: <Profile />,
      },
    ],
  },
]);
