import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const ProfileOverview = () => {
  const { id, name } = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  const age = queryParams.get("age");
  const navigate = useNavigate();

  const navigateToData = () => {
    navigate("data");
  };

  return (
    <div>
      <h3>ProfileOverview de {name}</h3>
      <p>
        Je suis {name} et j'ai {age} ans
      </p>
      <button onClick={navigateToData} className="btn btn-primary">
        data
      </button>
      <ul>
        <li>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste porro
          explicabo delectus nulla dolore facere pariatur, cum eius blanditiis
          excepturi impedit magnam dignissimos provident a consequatur
          reiciendis voluptate voluptatem facilis?
        </li>

        <NavLink preventScrollReset to="data">
          Vers Data
        </NavLink>
      </ul>
    </div>
  );
};

export default ProfileOverview;
