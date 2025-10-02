import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "../Redux/Actions/MoviesAction";
import { changeLang } from "../Redux/Actions/LangAcion";
import Card from "../Components/CardComponent";
import { LangContext } from '../context/LangContext';
import SearchBar from './../Components/Search';
import MySpinner from './../Components/MySpinner';
import Pagination from './../Components/Pagination';

function MoviesPage() {
  const dispatch = useDispatch();
  const reduxLang = useSelector((state) => state.myLangReducer.lang);
  const theme = useSelector((state) => state.myThemeReducer.theme); 
  const loader = useSelector((state) => state.myLoaderReducer.loader);

  const { contextLang, setContextLang } = useContext(LangContext);

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
    <div
      className={`container-fluid min-vh-100 py-4 ${
        theme === "LIGHT" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <div className="container">
        <button
          className={`btn my-3 ${
            theme === "LIGHT" ? "btn-outline-dark" : "btn-outline-light"
          }`}
          onClick={() => {
            const newLang = contextLang === "EN" ? "AR" : "EN";
            setContextLang(newLang);
            dispatch(changeLang(newLang));
          }}
        >
          {contextLang === "EN" ? "🇺🇸 English" : "🇪🇬 Arabic"}
        </button>

        <SearchBar
          onSearch={(value) => {
            setQuery(value);
            setPage(1);
          }}
        />

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
                    theme={theme} 
                  />
                </div>
              ))}
          </div>
        )}

        <div className="d-flex justify-content-center mt-4">
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      </div>
    </div>
  );
}

export default MoviesPage;