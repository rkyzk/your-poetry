import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import logo from "../assets/media/poetry-logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";
import { toast } from "react-toastify";
import useClickOutsideMenuRight from "../hooks/useClickOutsideMenuRight";

/**
 *  Render the first navbar on top right.
 *  Adjust displayed link items depending on the logged in status.
 */
const NavBar = () => {
  /** store info of logged in user. */
  const currentUser = useCurrentUser();
  /* expanded tells wheather the menu bar is expanded or not.
     setExpanded will set expanded true/false.
     ref stores info about if inside or outside the menu has been clicked */
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const { mySpaceMenu, setMySpaceMenu, mySpaceRef } =
    useClickOutsideMenuRight();
  /** get the function to set current user info */
  const setCurrentUser = useSetCurrentUser();

  /**
   * Sign out a user.
   * Close the drop down menu, set currenUser to null,
   * notify the user and remove the token time stamp.
   */
  const handleSignOut = async () => {
    try {
      // request the backend to log out the user
      await axios.post("dj-rest-auth/logout/");
      // close the dropdown menu.
      setExpanded(false);
      // set curretUser to null.
      setCurrentUser(null);
      toast("You've been signed out.");
      // remove the token time stamp.
      removeTokenTimestamp();
    } catch (err) {
      toast("There was an error.  Please try again.");
    }
  };

  const keepMenuOpen = (event) => {
    event.target.id === "nav-my-space" && setExpanded(true);
    setMySpaceMenu(!mySpaceMenu);
  };

  /*
   * Nav link items will be displayed when logged in.
   * 'setExpanded(false)' will close the dropdown menu.
   */
  const loggedIn = (
    <>
      <Avatar src={currentUser?.profile_image} height={40} navbar />
      <Button
        className={`${styles.DropdownBtn} pl-0`}
        id="nav-my-space"
        ref={mySpaceRef}
        onClick={(event) => keepMenuOpen(event)}
      >
        {currentUser?.username}
        <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
      </Button>
      {mySpaceMenu && (
        <div className={styles.DropdownBox}>
          <div className="mt-1">
            <NavLink
              to={`/profiles/${currentUser?.profile_id}`}
              className={styles.NavDropdownItem}
            >
              My Profile
            </NavLink>
          </div>
          <div>
            <NavLink to="/my-poems" className={styles.NavDropdownItem}>
              My poems
            </NavLink>
          </div>
          <div>
            <NavLink
              className={styles.NavDropdownItem}
              to={`/profiles/:id/following`}
            >
              Poets I'm following
            </NavLink>
          </div>
          <div>
            <NavLink className={styles.NavDropdownItem} to={`/liked`}>
              Poems I like
            </NavLink>
          </div>
          <div>
            <NavLink
              className={styles.NavDropdownItem}
              to="/"
              onClick={handleSignOut}
            >
              Sign out
            </NavLink>
          </div>
        </div>
      )}
    </>
  );

  /** Nav link items to be displayed when logged out */
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
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink exact activeClassName={styles.Active} to="/">
          <Navbar.Brand className={styles.Logo}>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </NavLink>
        <h1 className="mt-4">Your Poetry</h1>
        <Navbar.Toggle
          ref={ref}
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          id="navbar-toggle"
        >
          <i className={`${styles.Burger} fa-solid fa-bars`}></i>
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
            {/* If logged in, display 'loggedIn' if not, 'loggedOut'. */}
            {currentUser ? loggedIn : loggedOut}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
