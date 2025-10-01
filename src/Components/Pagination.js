import { useSelector } from "react-redux";

function Pagination(props) {
  const myTheme = useSelector((state) => state.myThemeReducer.theme);

  return (
    <div className="d-flex justify-content-center mt-4">
      <nav>
        <ul
          className={`pagination ${
            myTheme === "LIGHT" ? "bg-light text-dark" : "bg-dark text-light"
          } p-2 rounded`}
        >
          <li className={`page-item ${props.page === 1 ? "disabled" : ""}`}>
            <button
              className={`page-link border-danger ${
                myTheme === "LIGHT"
                  ? "bg-light text-dark"
                  : "bg-dark text-light"
              }`}
              onClick={() => props.onPageChange(props.page - 1)}
              disabled={props.page === 1}
            >
              Previous
            </button>
          </li>

          <li className="page-item disabled">
            <span
              className={`page-link border-danger ${
                myTheme === "LIGHT"
                  ? "bg-light text-dark"
                  : "bg-dark text-light"
              }`}
            >
               {props.page} 
            </span>
          </li>

          <li
            className={`page-item ${
              props.page === props.totalPages ? "disabled" : ""
            }`}
          >
            <button
              className={`page-link border-danger ${
                myTheme === "LIGHT"
                  ? "bg-light text-dark"
                  : "bg-dark text-light"
              }`}
              onClick={() => props.onPageChange(props.page + 1)}
              disabled={props.page === props.totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
