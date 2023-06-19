import React, { useState } from "react";
import Navbar from "../home/Navbar";
import "../Styles/Customer_styles/Search.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here using the query
    console.log("Search query:", query);
  };

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="searchbar-div">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="content">
        <h2>Recomendations</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio
          officiis quo sint, nisi ad tempora rerum alias, aperiam, laudantium
          neque sit quisquam vitae nemo reiciendis consectetur vel dolorum.
          Eveniet, tenetur nulla. Adipisci maiores quia, quam laborum inventore
          vitae a ad possimus vel ut. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde optio officiis quo sint, nisi ad tempora rerum
          alias, aperiam, laudantium neque sit quisquam vitae nemo reiciendis
          consectetur vel dolorum. Eveniet, tenetur nulla. Adipisci maiores
          quia, quam laborum inventore vitae a ad possimus vel ut.
        </p>
      </div>
    </>
  );
};

export default SearchBar;
