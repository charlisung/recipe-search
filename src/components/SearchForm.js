import { Link } from "react-router-dom";
import { FaHotdog } from "react-icons/fa";

export const SearchForm = ({ handleSearch, setTerm }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <form
        className="search-form"
        onSubmit={handleSearch}
        style={{ marginRight: "1px" }}
      >
        <input
          className="input"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search food name..."
        />
        <button>Search</button>
      </form>
      <Link to="/random">
        <button>
          Random <FaHotdog />
        </button>
      </Link>
    </div>
  );
};
