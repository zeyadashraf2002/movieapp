import Title from "../Components/TitleComponent";

function Login() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: "url('/photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card p-4 shadow-lg "
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          borderRadius: "10px",
            maxWidth: "400px", 
          width: "100%", 
        }}
      >
        <Title title="Login Page" className="text-danger mb-4" />

        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control border-0"
              id="exampleInputEmail1"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#fff" }}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text text-light">
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
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#fff" }}
            />
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
