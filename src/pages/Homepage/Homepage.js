import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Homepage = () => {
  const recipes = useLoaderData();

  return (
    <>
      <h2>Homepage</h2>
      <ul>{recipes && recipes.map((r) => <li key={r._id}>{r.title}</li>)}</ul>
    </>
  );
};

export default Homepage;
