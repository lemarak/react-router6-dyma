import axios from "axios";

export const homepageLoader = async ({ params, request }) => {
  const res = await axios.get("https://restapi.fr/api/recipes");
  const url = new URL(request.url);
  //   console.log(url.searchParams.get("name"));
  if (res.status === 200) {
    const recipes = res.data;
    return new Promise((resolve) => {
      setTimeout(() => resolve({ recipes }), 2000);
    });
  } else {
    throw new Error("something went wrong");
  }
};
