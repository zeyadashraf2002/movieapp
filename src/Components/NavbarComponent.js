import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../Redux/Actions/LangAcion";
import { changeTheme } from "../Redux/Actions/ThemeAction";

function Nav() {
  const theme = useSelector((state) => state.myThemeReducer.theme);
  const languge = useSelector((state) => state.myLangReducer.lang);
  const favoriteCount = useSelector(
    (state) => state.myFavoriteReducer.items.length
  );

  const dispatch = useDispatch();

  const handleLang = () => {
    dispatch(changeLang(languge === "EN" ? "AR" : "EN"));
  };

  const handleTheme = () => {
    dispatch(changeTheme(theme === "DARK" ? "LIGHT" : "DARK"));
  };

  return (
    <nav
      className={`navbar navbar-expand-lg shadow ${
        theme === "LIGHT"
          ? "navbar-light bg-light text-dark"
          : "navbar-dark bg-dark text-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand ms-4 text-danger fw-bold" to="/">
          MoviesApp
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            

            <li className="nav-item me-2 position-relative">
              <Link
                className={`nav-link ${
                  theme === "LIGHT" ? "text-dark" : "text-light"
                }`}
                to="/fav"
              >
                <span style={{ color: "red" }}>Favorite</span>
                {favoriteCount > 0 && (
                  <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                    {favoriteCount}
                  </span>
                )}
              </Link>
            </li>
                <li className="nav-item me-2">
              <Link
                className={`nav-link ${
                  theme === "LIGHT" ? "text-dark" : "text-light"
                }`}
                to="/movies"
              >
                Movies
              </Link>
            </li>

            <li className="nav-item me-2">
              <Link
                className={`nav-link ${
                  theme === "LIGHT" ? "text-dark" : "text-light"
                }`}
                to="/login"
              >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  theme === "LIGHT" ? "text-dark" : "text-light"
                }`}
                to="/register"
              >
                Register
              </Link>
            </li>
            <li className="nav-item me-2">
              <button className="btn btn-outline-primary" onClick={handleLang}>
                {languge==="EN"?"AR":"EN"}
              </button>
            </li>

            <li className="nav-item me-2">
              <button className="btn" onClick={handleTheme}>
                {theme === "LIGHT" ? "🌙" : "🌞"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
