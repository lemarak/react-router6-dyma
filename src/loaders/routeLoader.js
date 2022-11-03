import { json } from "react-router-dom";

export const routeLoader = async () => {
  const user = { name: "Charlie", age: 42 };
  return json(user, { status: 200 });
};
