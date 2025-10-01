import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/CardComponent";
import Pagination from "../Components/Pagination";
import SearchBar from "../Components/Search";
import Myspinner from "../Components/MySpinner";
import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../Redux/Actions/LangAcion";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false); 

  const language = useSelector((state) => state.myLangReducer.lang);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // 👈 شغل اللودر المحلي
      try {
        let url = query
          ? `/search/movie?query=${query}&page=${page}&language=${language === "EN" ? "en-US" : "ar-SA"}`
          : `/movie/popular?page=${page}&language=${language === "EN" ? "en" : "ar"}`;

        const res = await axios.get(
          `https://api.themoviedb.org/3${url}&api_key=ac22c7716cb11361c66ec6c8f7aa3c8e`
        );
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // 👈 وقف اللودر
      }
    };
    fetchMovies();
  }, [page, query, language]);

  return (
    <div className="container-fluid text-light min-vh-100 py-4">
      <div className="container">
        <SearchBar
          onSearch={(value) => {
            setQuery(value);
            setPage(1);
          }}
        />

        <div
          className="btn btn-outline-light my-3"
          onClick={() => dispatch(changeLang(language === "EN" ? "AR" : "EN"))}
        >
          {language}
        </div>

        {loading ? ( // 👈 استخدم اللودر المحلي
          <div className="d-flex justify-content-center mt-5">
            <Myspinner />
          </div>
        ) : (
          <>
            <div className="row mt-4">
              {movies.map((movie) => (
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
            <div className="d-flex justify-content-center mt-4">
              <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
