import React from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

const Profile = () => {
  // const params = useParams();
  // const [queryParams, setQueryParams] = useSearchParams();

  //   console.log("p", params);
  //   console.log("qp", queryParams);
  //   console.log("qp age", queryParams.get("age"));

  //   if (!queryParams.get("type")) {
  //     setQueryParams({ type: "person" });
  //   }

  const { user } = useOutletContext();

  // console.log("user profile", user);
  return (
    <>
      <ul className="d-flex p-20">
        <NavLink end to="">
          Overview
        </NavLink>
        <NavLink to="data">Data</NavLink>
      </ul>
      <div className="p-20">
        <h2 className="mb-20">Profile</h2>
        <Outlet context={{ user }} />
      </div>
    </>
  );
};

export default Profile;
