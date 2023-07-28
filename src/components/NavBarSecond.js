import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import styles from "../styles/NavBarSecond.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const NavBarSecond = () => {
  const currentUser = useCurrentUser();
  const { pathname } = useLocation();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  let hide = pathname === "/signin" || pathname === "/signup"

  const keepMenuOpen = (event) => {
    event.target.id === "poem-dropdown" &&
    setExpanded(true);
  }

  return (
    !hide &&
    <Navbar expanded={expanded} className={styles.NavBarSecond} expand="md" fixed="top">
      <Container>
        <Navbar.Toggle
          ref={ref}
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <span className={styles.Burger}>|||</span>
        </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.NavToggle} text-left`}>
            <NavDropdown
              className={`${styles.NavLink} ${styles.SpaceLeft}`}
              title="Poems"
              id="poem-dropdown"
              onClick={(event) => keepMenuOpen(event)}
            >
              <NavDropdown.Item>
                <NavLink
                  className={styles.NavLink}
                  to="/new-poems"
                  onClick={() => setExpanded(false)}
                >
                  New Poems
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={styles.NavLink}
                  to="/popular-poems"
                  onClick={() => setExpanded(false)}
                >
                  Popular Poems
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={styles.NavLink}
                  to="/poems-by-categories"
                  onClick={() => setExpanded(false)}
                >
                  Poems by Categories
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={styles.NavLink}
                  to="/search/poems"
                  onClick={() => setExpanded(false)}
                >
                  Search
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            {currentUser && (
              <NavLink className={`${styles.NavLink} ${styles.SpaceLeft} mt-2`} to="/poems/create">
                Write Poems
              </NavLink>
            )}
            <NavLink className={`${styles.NavLink} ${styles.SpaceLeft} mt-2`} to="/search/profiles">
              Search Profiles
            </NavLink>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarSecond;