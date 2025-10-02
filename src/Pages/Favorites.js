import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Components/CardComponent";

function Favorites() {
  const favorites = useSelector((state) => state.myFavoriteReducer.items);
  const theme = useSelector((state) => state.myThemeReducer.theme); 

  if (favorites.length === 0) {
    return (
      <div
        className={`d-flex align-items-center justify-content-center min-vh-100 ${
          theme === "LIGHT" ? "bg-light text-dark" : "bg-dark text-light"
        }`}
      >
        <div className="text-center">
          <p className="fs-3">Not selected favourite movies.</p>
          <Link
            to="/"
            className={`btn ${theme === "LIGHT" ? "btn-primary" : "btn-outline-light"}`}
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`container py-4 ${
        theme === "LIGHT" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <h2 className="mb-4">My Favorites</h2>
      <div className="row">
        {favorites.map((movie) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={movie.id}>
            <Card
              id={movie.id}
              name={movie.name}
              date={movie.date}
              image={movie.image}
              theme={theme} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
