import { useParams, useSearchParams } from "react-router-dom";

const ProfileOverview = () => {
  const { id, name } = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  const age = queryParams.get("age");

  return (
    <div>
      <h3>ProfileOverview de {name}</h3>
      <p>
        Je suis {name} et j'ai {age} ans
      </p>
    </div>
  );
};

export default ProfileOverview;
