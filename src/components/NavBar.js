import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/poetry-logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";
import { toast } from "react-toastify";

// render the first navbar on top right
const NavBar = () => {
  // store info of logged in/out, if logged in, which user
  const currentUser = useCurrentUser();
  /* expanded: wheather the menu bar is expanded/not
     setExpanded: set expanded true/false
     ref: stores info about what has been clicked */
  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  // function to set current user
  const setCurrentUser = useSetCurrentUser();

  // funtion for signing out
  const handleSignOut = async () => {
    try {
      // tell backend to log out the user
      await axios.post("dj-rest-auth/logout/");
      setExpanded(false);
      setCurrentUser(null);
      toast("You've been signed out.");
      removeTokenTimestamp();
    } catch (err) {
      toast("Something went wrong.  Please try again.");
    }
  };

  /* For screen size md or below, if the username has been clicked,
     keep the burger menu open. */
  const keepMenuOpen = (event) => {
    event.target.id === "nav-dropdown" &&
    setExpanded(true);
  }

  // Nav link items to be displayed when logged in
  const loggedIn = (
    <>
      <Avatar src={currentUser?.profile_image} height={40} navbar />
      <NavDropdown
        className={`${styles.Dropdown} ${styles.Name}`}
        title={currentUser?.username}
        id="nav-my-space"
        onClick={(event) => keepMenuOpen(event)}
      >
        <NavDropdown.Item>
          <NavLink
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
            id="my-profile"
            onClick={() => setExpanded(false)}
          >
            My Profile
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            className={styles.NavLink}
            to="/my-poems"
            onClick={() => setExpanded(false)}
          >
            My poems
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            className={styles.NavLink}
            to={`/profiles/:id/following`}
            onClick={() => setExpanded(false)}
          >
            Poets I'm following
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            className={styles.NavLink}
            to={`/liked`}
            onClick={() => setExpanded(false)}
          >
            Poems I like
          </NavLink>
        </NavDropdown.Item>
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

  // Nav link items to be displayed when logged out
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

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink exact activeClassName={styles.Active} to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" width="70" height="auto" />
          </Navbar.Brand>
        </NavLink>
        <h1 className="mt-4">Your Poetry</h1>
        <Navbar.Toggle
          ref={ref}
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          id="navbar-toggle"
        >
          <i class={`${styles.Burger} fa-solid fa-bars`}></i>
        </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.NavToggle} ml-auto`}>
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