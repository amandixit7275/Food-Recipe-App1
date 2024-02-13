import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-700 duration-300"
        >
          Food Recipe
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          value={searchParams}
          onChange={(event) => {
            setSearchParams(event.target.value);
          }}
          type="text"
          name="search"
          placeholder="Enter items..."
          className="bg-white/75 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200  "
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorite"}
            className="text-black hover:text-gray-700 duration-300"
          >
            {" "}
            Favorites{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
