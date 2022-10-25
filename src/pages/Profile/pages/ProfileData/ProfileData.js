import { NavLink, useOutletContext } from "react-router-dom";

const ProfileData = () => {
  const { user } = useOutletContext();

  return (
    <>
      <h3>ProfileData de {user.name}</h3>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aut
          non, veniam harum odio quisquam, ab in laborum recusandae aperiam
          minus, sapiente similique unde repudiandae fuga. Quo recusandae illo
          exercitationem?
        </li>
        <NavLink to="..">Vers Overview</NavLink>

        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aut
          non, veniam harum odio quisquam, ab in laborum recusandae aperiam
          minus, sapiente similique unde repudiandae fuga. Quo recusandae illo
          exercitationem?
        </li>
      </ul>
    </>
  );
};

export default ProfileData;
