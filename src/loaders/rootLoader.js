import { json } from "react-router-dom";

export const rootLoader = async () => {
  const user = { name: "Paul", age: 42 };
  return json(user, { status: 200 });
};
