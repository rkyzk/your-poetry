import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/poetry-logo.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../styles/NavBar.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = () => {
  const currentUser = useCurrentUser();
  console.log(currentUser?.username);

  const loggedOut = (
    <>
      <NavLink
        className={`${styles.NavLink} mr-3`}
        activeClassName={styles.Active}
        to="/signin"
      >
        Sign in
      </NavLink>
      <NavLink
        className={`${styles.NavLink} mr-3`}
        activeClassName={styles.Active}
        to="/signup"
      >
        Sign up
      </NavLink>
    </>
  );

  const loggedIn = (
    <>
      <NavDropdown title={currentUser?.username} id="nav-dropdown">
        <NavDropdown.Item>
          <NavLink
            className={styles.NavLink}
          >
            Sign out
          </NavLink> 
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink exact activeClassName={styles.Active} to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="70" />
          </Navbar.Brand>
        </NavLink>
        <h1 className="mt-4">Your Poetry</h1>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={`${styles.NavLink} mr-3`}
              activeClassName={styles.Active}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={`${styles.NavLink} mr-3`}
              activeClassName={styles.Active}
              to="/contact"
            >
              Contact
            </NavLink>
            {currentUser ? loggedIn : loggedOut}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;