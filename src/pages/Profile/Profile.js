import { NavLink, Outlet, useParams, useSearchParams } from "react-router-dom";

const Profile = () => {
  const { id, name } = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  const age = queryParams.get("age");

  return (
    <>
      <div className="d-flex flex-row align-items-center mb-20">
        <h2>
          Profile {name} ({id})
        </h2>
        <ul className="d-flex m-20">
          <li>
            <NavLink end to="">
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="data">Data</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Profile;
