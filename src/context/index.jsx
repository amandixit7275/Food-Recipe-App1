import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext("");

export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState();
  const [favoritesList, setFavoritessList] = useState([]);
  const navigate = useNavigate();

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
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setSearchParams("");
    }
  }

  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
    const cpyFavoriteList = [...favoritesList];
    const index = cpyFavoriteList.findIndex(
      (index) => index.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyFavoriteList.push(getCurrentItem);
    } else {
      cpyFavoriteList.splice(index);
    }
    setFavoritessList(cpyFavoriteList);
  }
  console.log("favoritesList", favoritesList);
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
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
