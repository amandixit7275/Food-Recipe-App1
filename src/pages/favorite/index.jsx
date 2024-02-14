import React from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";
import { useContext } from "react";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="flex flex-wrap py-8 container mx-auto justify-center gap-10 ">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          {" "}
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added.. Add items.
          </p>{" "}
        </div>
      )}
    </div>
  );
}
