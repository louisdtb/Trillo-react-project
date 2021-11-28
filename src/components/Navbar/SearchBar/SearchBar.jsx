import React from "react";
import Search from "../../../img/SVG/magnifying-glass.svg";

const SearchBar = () => {
  return (
    <div>
      <form action="#" className="searchbar">
        <input
          type="text"
          className="searchbar-input"
          placeholder="Search hotels"
        />
        <button className="searchbar__button">
          <img src={Search} alt="search icon" className="searchbar__svg" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
