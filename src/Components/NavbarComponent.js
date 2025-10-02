import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../Redux/Actions/LangAcion';
import { changeTheme } from '../Redux/Actions/ThemeAction';

function NavBar() {
  const theme = useSelector((state) => state.myThemeReducer.theme);
  const language = useSelector((state) => state.myLangReducer.lang);
  const favoriteCount = useSelector((state) => state.myFavoriteReducer.items.length);
  const dispatch = useDispatch();

  const handleLang = () => dispatch(changeLang(language === "EN" ? "AR" : "EN"));
  const handleTheme = () => dispatch(changeTheme(theme === "DARK" ? "LIGHT" : "DARK"));

  return (
    <Navbar
      expand="lg"
      className={theme === "LIGHT" ? "bg-light" : "bg-dark"}
      variant={theme === "LIGHT" ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-danger fw-bold">
          MoviesApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/fav">
              Favorite
              {favoriteCount > 0 && (
                <Badge bg="danger" className="ms-1">{favoriteCount}</Badge>
              )}
            </Nav.Link>

            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>

            <Button variant="outline-primary" className="ms-2" onClick={handleLang}>
              {language === "EN" ? "AR" : "EN"}
            </Button>
            <Button variant="outline-secondary" className="ms-2" onClick={handleTheme}>
              {theme === "LIGHT" ? "🌙" : "🌞"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
