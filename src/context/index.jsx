import { createContext, useState } from "react";

export const GlobalContext = createContext("");

export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await response.json();
      console.log(data);
      console.log(data?.data?.recipes);

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParams("");
      }
    } catch (error) {
      setLoading(false);
      setSearchParams("");
    }
  }
  console.log(loading, recipeList);
  return (
    <GlobalContext.Provider
      value={{
        handleSubmit,
        loading,
        recipeList,
        searchParams,
        setSearchParams,
        recipeDetailsData,
        setRecipeDetailsData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
