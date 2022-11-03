import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h2>ErrorPage</h2>
      <p>
        {error.message || error.statusText} ({error.status})
      </p>
    </>
  );
};

export default ErrorPage;
