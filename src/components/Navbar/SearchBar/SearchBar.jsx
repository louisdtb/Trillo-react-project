import React from "react";
import { ReactComponent as Search } from "../../../img/SVG/magnifying-glass.svg";

const SearchBar = () => {
  return (
    <form action="#" className="searchbar">
      <input
        type="text"
        className="searchbar__input"
        placeholder="Search hotels"
      />
      <button className="searchbar__button">
        <Search src={Search} alt="search icon" className="searchbar__svg" />
      </button>
    </form>
  );
};

export default SearchBar;
