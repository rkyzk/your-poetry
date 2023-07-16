import React from "react";
import axios from "axios";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/poetry-logo.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../styles/NavBar.module.css";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

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
        Register
      </NavLink>
    </>
  );

  const loggedIn = (
    <>
      <NavDropdown title={currentUser?.username} id="nav-dropdown">
        <NavDropdown.Item>
          <NavLink
            className={styles.NavLink}
            to="/"
            onClick={handleSignOut}
          >
            Sign out
          </NavLink> 
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink exact activeClassName={styles.Active} to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="70" />
          </Navbar.Brand>
        </NavLink>
        <h1 className="mt-4">Your Poetry</h1>
        <Navbar.Toggle
          ref={ref}
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
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
            {currentUser? loggedIn : loggedOut}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;