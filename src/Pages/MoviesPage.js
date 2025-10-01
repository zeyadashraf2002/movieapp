import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "../Redux/Actions/MoviesAction";
import { changeLang } from "../Redux/Actions/LangAcion";
import Card from "../Components/CardComponent";
import Pagination from "../Components/Pagination";
import SearchBar from "../Components/Search";
import MySpinner from "../Components/MySpinner";
import { LangContext } from "../Components/Context/LangContext";


function MoviesPage() {
  const dispatch = useDispatch();
  const reduxLang = useSelector((state) => state.myLangReducer.lang); // من Redux
  const loader = useSelector((state) => state.myLoaderReducer.loader);

  const { contextLang, setContextLang } = useContext(LangContext); // من Context

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    dispatch(getMoviesList(page, query, contextLang)).then((res) => {
      if (res && res.results) {
        setList(res.results);
        setTotalPages(res.total_pages);
      }
    });
  }, [page, query, contextLang, dispatch]);

  return (
    <div className="container-fluid text-light min-vh-100 py-4">
      <div className="container">

        {/* language switch button (Context) */}
        <button
          className="btn btn-dark my-3"
          onClick={() => {
            const newLang = contextLang === "EN" ? "AR" : "EN";
            setContextLang(newLang); // Context
            dispatch(changeLang(newLang)); // Redux (لو عايز الاتنين يبقوا متزامنين)
          }}
        >
          {contextLang === "EN" ? "🇺🇸 English" : "🇪🇬 Arabic"}
        </button>

        {/* search bar */}
        <SearchBar
          onSearch={(value) => {
            setQuery(value);
            setPage(1);
          }}
        />

        {/* loader OR movies */}
        {loader ? (
          <div className="d-flex justify-content-center mt-5">
            <MySpinner />
          </div>
        ) : (
          <div className="row mt-4">
            {list &&
              list.map((movie) => (
                <div className="col-12 col-md-6 col-lg-4 mb-4" key={movie.id}>
                  <Card
                    id={movie.id}
                    name={movie.title}
                    date={movie.release_date}
                    image={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image"
                    }
                  />
                </div>
              ))}
          </div>
        )}

        {/* pagination */}
        <div className="d-flex justify-content-center mt-4">
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      </div>
    </div>
  );
}

export default MoviesPage;
