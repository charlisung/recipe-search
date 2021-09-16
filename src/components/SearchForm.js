import React from "react";
import { Link } from "react-router-dom";
import { FaHotdog } from "react-icons/fa";

export const SearchForm = ({ setTerm }) => {
  return (
    <>
      <form className="search-form">
        <input
          className="input"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search food name..."
        />
        <Link to="/results">
          <button>Search</button>
        </Link>
        <Link to="/random">
          <button>
            Random <FaHotdog />
          </button>
        </Link>
      </form>
    </>
  );
};
