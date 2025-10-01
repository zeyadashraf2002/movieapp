import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Components/CardComponent";

function Favorites () {
  const favorites = useSelector((state) => state.myFavoriteReducer.items);

  if (favorites.length === 0) {
    return (
      <div className="d-flex align-items-center justify-content-center max-vh-100">
        <div className="text-center">
          <p className="fs-3">
           Not selected favourite movies.
          </p>
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">My Favorites</h2>
      <div className="row">
        {favorites.map((movie) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={movie.id}>
            <Card
              id={movie.id}
              name={movie.name}
              date={movie.date}
              image={movie.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites ;
