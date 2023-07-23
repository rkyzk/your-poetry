import React from "react"; // removed { useContext }
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import styles from "../styles/NavBarSecond.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBarSecond = () => {
  const currentUser = useCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  return (
    <Navbar expanded={expanded} className={styles.NavBarSecond} expand="md" fixed="top">
      <Container>
        <Navbar.Toggle
          ref={ref}
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.NavToggle} text-left`}>
            <NavDropdown
              className={`${styles.NavLink} ${styles.SpaceLeft}`}
              title="Poems"
              id="nav-dropdown"
              onClick={() => setExpanded(expanded)}
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
                  onClick={() => setExpanded(!expanded)}
                >
                  Popular Poems
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={styles.NavLink}
                  to="/poems-by-categories"
                  onClick={() => setExpanded(!expanded)}
                >
                  Poems by Categories
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={styles.NavLink}
                  to="/search/poems"
                  onClick={() => setExpanded(!expanded)}
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