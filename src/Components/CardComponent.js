import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../Redux/Actions/AddToFav";
import removeFromFav from "../Redux/Actions/RemoveFav";

function Card(props) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavoriteReducer.items);
  const myTheme = useSelector((state) => state.myThemeReducer.theme);

  const isFav = favorites.some((movie) => movie.id === props.id);

  const handleFavClick = () => {
    if (isFav) {
      dispatch(removeFromFav(props.id)); 
    } else {
      dispatch(addToFav({ 
        id: props.id, 
        name: props.name, 
        image: props.image, 
        date: props.date 
      })); 
    }
  };

  return (
    <div
      className={`${myTheme === "LIGHT" ? "bg-light text-dark" : "bg-dark text-light"} card shadow-lg h-100`}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.image}
            className="img-fluid rounded-start h-100"
            alt={props.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <div>
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
                <small>{props.date}</small>
              </p>
            </div>
            <div className="mt-2">
              <Link
                className="btn btn-outline-danger btn-sm"
                to={`/movie/${props.id}`}
              >
                More Details
              </Link>
              <button
                onClick={handleFavClick}
                className={`btn btn-sm ms-2 ${isFav ? "btn-danger" : "btn-outline-danger"}`}
              >
                {isFav ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
