import axios from "axios";

export const getRecipes = async () => {
  const res = await axios.get("https://restapi.fr/api/recipes");

  if (res.status === 200) {
    const recipes = res.data;
    return recipes;
  } else {
    throw new Error("something went wrong");
  }
};
