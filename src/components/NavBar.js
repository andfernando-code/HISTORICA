import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "./Button";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            HISTORICA <i className="fa-solid fa-gopuram"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addnew" className="nav-links" onClick={closeMobileMenu}>
                Add New
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/explore" className="nav-links" onClick={closeMobileMenu}>
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="nav-links" onClick={closeMobileMenu}>
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <CustomButton buttonStyle="btn--outline">Sign Up</CustomButton>
          )}
          {userEmail && (
            <div className="user-icon">
              {userEmail.charAt(0).toUpperCase()} 
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
