import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { addToFav } from "../Redux/Actions/AddToFav";
import removeFromFav from "../Redux/Actions/RemoveFav";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [trailer, setTrailer] = useState(null);
  const theme = useSelector((state) => state.myThemeReducer.theme);
  const favorites = useSelector((state) => state.myFavoriteReducer.items);
  const dispatch = useDispatch();

  const isFav = favorites.some((fav) => fav.id === Number(id));

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b11725f9e5398c8211838ec6320bf330&language=en-US`
      )
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b11725f9e5398c8211838ec6320bf330&language=en-US`
      )
      .then((res) => {
        const trailers = res.data.results.filter(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        if (trailers.length > 0) {
          setTrailer(`https://www.youtube.com/watch?v=${trailers[0].key}`);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!movie) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  const handleFavClick = () => {
    if (isFav) {
      dispatch(removeFromFav(movie.id));
    } else {
      dispatch(
        addToFav({
          id: movie.id,
          name: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          date: movie.release_date,
        })
      );
    }
  };

  return (
    <div
      className={`container-fluid min-vh-100 py-5 ${
        theme === "LIGHT" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="img-fluid rounded shadow-lg"
                alt={movie.title}
              />
            )}
          </div>

          <div className="col-md-8">
            <h2 className="fw-bold">{movie.title}</h2>
            <p className="text-muted fst-italic">{movie.tagline}</p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime} mins
            </p>
            <p>
              <strong>Language:</strong>{" "}
              {movie.original_language?.toUpperCase()}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {movie.vote_average} / 10 (
              {movie.vote_count} votes)
            </p>
            <p>
              <strong>Budget:</strong>{" "}
              {movie.budget
                ? `$${movie.budget.toLocaleString()}`
                : "Not available"}
            </p>
            <p>
              <strong>Revenue:</strong>{" "}
              {movie.revenue
                ? `$${movie.revenue.toLocaleString()}`
                : "Not available"}
            </p>

            <h5 className="mt-4">Overview</h5>
            <p>{movie.overview}</p>

            <h5 className="mt-4">Genres</h5>
            {movie.genres?.map((genre) => (
              <span key={genre.id} className="badge bg-primary me-2">
                {genre.name}
              </span>
            ))}

            <h5 className="mt-4">Production Companies</h5>
            {movie.production_companies?.map((company) => (
              <span key={company.id} className="badge bg-secondary me-2">
                {company.name}
              </span>
            ))}

            <h5 className="mt-4">Production Countries</h5>
            {movie.production_countries?.map((country, index) => (
              <span key={index} className="badge bg-info text-dark me-2">
                {country.name}
              </span>
            ))}

            <div className="mt-4">
              {trailer && (
                <a
                  href={trailer}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger me-2"
                >
                  <i className="bi bi-play-circle"></i> Watch Trailer
                </a>
              )}
              <button
                onClick={handleFavClick}
                className={`btn ${isFav ? "btn-danger" : "btn-outline-warning"}`}
              >
                <i className="bi bi-bookmark"></i>{" "}
                {isFav ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
