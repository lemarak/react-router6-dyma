import { redirect } from "react-router-dom";
import { isLoggedin } from "../api/apiAuth";
import { getRecipes } from "../api/apiRecipes";

export const profileLoader = async () => {
  if (await isLoggedin()) {
    const recipes = await getRecipes();
    return recipes;
  } else {
    return redirect("/");
  }
};
