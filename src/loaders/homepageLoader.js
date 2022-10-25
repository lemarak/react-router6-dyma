import axios from "axios";

export const loaderRecipes = async ({ params, request }) => {
  const url = new URL(request.url);
  console.log(url.searchParams.get("name"));
  const response = await axios.get("https://restapi.fr/api/recipes");
  if (response.status === 200) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response.data);
      }, 2000);
    });
  } else {
    throw new Error("something went wrong");
  }
};
