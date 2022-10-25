import axios from "axios";

export const loaderRecipes = async () => {
  const res = await axios.get("https://restapi.fr/api/recipes");
  if (res.status === 200) {
    return res.data;
  }
};
