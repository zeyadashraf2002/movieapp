import { useState } from "react";
import { useSelector } from "react-redux";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  const myTheme = useSelector((state) => state.myThemeReducer.theme);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form className="d-flex mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`form-control me-2 border-secondary ${
          myTheme === "LIGHT" ? "bg-light text-dark placeholder-dark" : "bg-dark text-light placeholder-light"
        }`}
        placeholder="Search for movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className={`btn btn-outline-${myTheme === "LIGHT" ? "dark" : "light"}`}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
