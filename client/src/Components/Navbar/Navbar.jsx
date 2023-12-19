import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logostackoverflow.png";
import search from "../../assets/search.svg";
import Avatar from "../../Components/Avatar/Avatar";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router";

const Navbar = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodeToken = jwtDecode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  useEffect(() => {}, [dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span className="burger-icon">&#9776;</span>
        </div>
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" width="120px" />
        </Link>

        {/* Mobile Menu Button */}

        <div
          className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}
          onClick={closeMobileMenu}
        >
          <Link to="/" className="nav-btn nav-item">
            About
          </Link>
          <Link to="/" className="nav-btn nav-item">
            Product
          </Link>
          <Link to="/" className="nav-btn nav-item">
            For Teams
          </Link>
        </div>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="logo" width="15" className="search-icon" />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            login
          </Link>
        ) : (
          <>
            <Link
              to={`/Users/${User?.result._id}`}
              // style={{ color: "white", textDecoration: "none" }}
            >
              {User.result.file ? (
                <img
                  src={`http://localhost:5000/uploads/${User.result.file}`}
                  alt={User.result.name}
                  className="profile-picture"
                  style={{
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                  }}
                />
              ) : (
                <Avatar
                  backgroundColor="#009dff"
                  color="white"
                  borderRadius="50%"
                  px="5px"
                  py="10px"
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Avatar>
              )}
            </Link>
            {/* <Avatar
              backgroundColor="#009dff"
              px="5px"
              py="10px"
              borderRadius="50%"
              color="white "
            >
              <Link
                to={`/Users/${User?.result._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar> */}
            <button
              className="nav-item nav-links nav-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
