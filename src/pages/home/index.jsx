import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  if (loading) return <h3>Loading ... Please wait.!</h3>;
  return (
    <div className="flex flex-wrap py-8 container mx-auto justify-center gap-10 ">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          {" "}
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to Show .. Please search other item
          </p>{" "}
        </div>
      )}
    </div>
  );
}
