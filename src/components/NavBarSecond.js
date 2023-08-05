import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBarSecond.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

/**
 * Return the second navigation bar on the left side of the page.
 * The component will be displayed on all pages except for
 * signup and signin pages.
 * Renders different nav link items depending on the logged in status.
 * @returns NavBar
 */
const NavBarSecond = () => {
  /** stores info on the logged in user. */
  const currentUser = useCurrentUser();
  /** get the URL of the current page. */
  const { pathname } = useLocation();
  /** expanded tells wheather the menu bar is expanded/not.
      setExpanded will set expanded true/false.
      ref stores info about if inside or outside the menu has been clicked */
  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  /** On signin and singup pages set hide true so this component won't appear. */
  let hide = pathname === "/signin" || pathname === "/signup";

  /** if 'poem' is clicked, keep the menu open. */
  const keepMenuOpen = (event) => {
    event.target.id === "poem-dropdown" && setExpanded(true);
  };

  return (
    !hide && (
      <Navbar
        expanded={expanded}
        className={styles.NavBarSecond}
        expand="md"
        fixed="top"
      >
        <Container>
          <Navbar.Toggle
            ref={ref}
            aria-controls="basic-navbar-second-nav"
            onClick={() => setExpanded(!expanded)}
          >
            <i className={`${styles.Burger} fa-solid fa-bars`}></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-second-nav">
            <Nav className={`${styles.NavToggle} text-left`}>
              <NavDropdown
                className={`${styles.NavLink} ${styles.SpaceLeft}`}
                title="Poems"
                id="poem-dropdown"
                onClick={(event) => keepMenuOpen(event)}
              >
                <div className="mt-1">
                  <NavLink
                    className={styles.NavDropdownItem}
                    to="/new-poems"
                    onClick={() => setExpanded(false)}
                  >
                    New Poems
                  </NavLink>
                </div>
                <div className="mt-1">
                  <NavLink
                    className={styles.NavDropdownItem}
                    to="/popular-poems"
                    onClick={() => setExpanded(false)}
                  >
                    Popular Poems
                  </NavLink>
                </div>
                <div className="mt-1">
                  <NavLink
                    className={styles.NavDropdownItem}
                    to="/poems-by-categories"
                    onClick={() => setExpanded(false)}
                  >
                    Poems by Categories
                  </NavLink>
                </div>
                <div className="mt-1">
                  <NavLink
                    className={styles.NavDropdownItem}
                    to="/search/poems"
                    onClick={() => setExpanded(false)}
                  >
                    Search
                  </NavLink>
                </div>
              </NavDropdown>
              {currentUser && (
                <NavLink
                  className={`${styles.NavLink} ${styles.SpaceLeft} mt-2`}
                  to="/poems/create"
                >
                  Write Poems
                </NavLink>
              )}
              <NavLink
                className={`${styles.NavLink} ${styles.SpaceLeft} mt-2`}
                to="/search/profiles"
              >
                Search Profiles
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  );
};

export default NavBarSecond;
