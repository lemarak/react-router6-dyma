import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <h2>Profile</h2>
      <ul className="d-flex p-20">
        <li>
          <NavLink end to="">
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="data">Data</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Profile;
