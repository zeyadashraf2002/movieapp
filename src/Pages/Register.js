import { useSelector } from "react-redux";
import Title from "../Components/TitleComponent";

function Register() {
  const theme = useSelector((state) => state.myThemeReducer.theme); 
  return (
    <div
      className={`container-fluid d-flex justify-content-center align-items-center min-vh-100 ${
        theme === "LIGHT" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
      style={{
        backgroundImage: theme === "LIGHT" ? "none" : "url('/photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          backgroundColor: theme === "LIGHT" ? "#fff" : "rgba(0, 0, 0, 0.6)",
          color: theme === "LIGHT" ? "#000" : "#fff",
          borderRadius: "10px",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <Title title="Register Page" className="text-danger mb-4" />

        <form>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control border-0"
              id="userName"
              style={{
                backgroundColor: theme === "LIGHT" ? "#e9ecef" : "rgba(255, 255, 255, 0.2)",
                color: theme === "LIGHT" ? "#000" : "#fff",
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control border-0"
              id="exampleInputEmail1"
              style={{
                backgroundColor: theme === "LIGHT" ? "#e9ecef" : "rgba(255, 255, 255, 0.2)",
                color: theme === "LIGHT" ? "#000" : "#fff",
              }}
            />
            <div id="emailHelp" className={`form-text ${theme === "LIGHT" ? "text-dark" : "text-light"}`}>
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control border-0"
              id="exampleInputPassword1"
              style={{
                backgroundColor: theme === "LIGHT" ? "#e9ecef" : "rgba(255, 255, 255, 0.2)",
                color: theme === "LIGHT" ? "#000" : "#fff",
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control border-0"
              id="exampleInputPassword2"
              style={{
                backgroundColor: theme === "LIGHT" ? "#e9ecef" : "rgba(255, 255, 255, 0.2)",
                color: theme === "LIGHT" ? "#000" : "#fff",
              }}
            />
          </div>

          <button type="submit" className={`btn ${theme === "LIGHT" ? "btn-danger" : "btn-outline-light"} w-100`}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
