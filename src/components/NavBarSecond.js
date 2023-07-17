import React from "react"; // removed { useContext }
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "../styles/NavBarSecond.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBarSecond = () => {
  const currentUser = useCurrentUser();
  return (
    <Navbar className={styles.NavBarSecond} expand="md" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavDropdown className={`ml-4 ${styles.NavLink}`} title="Poems" id="nav-dropdown">
              <NavDropdown.Item>
                <NavLink className={styles.NavLink} to="/new-poems">
                  New Poems
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className={styles.NavLink} to="/popular-poems">
                  Popular Poems
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className={styles.NavLink} to="/poems-by-categories">
                  Poems by Categories
                  </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className={styles.NavLink} to="/search/poems">
                  Search
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            {currentUser && (
              <NavLink className={`${styles.NavLink} ml-2`} to="/poems/create">
                Write Poems
              </NavLink>
            )}
            <NavLink className={`${styles.NavLink} ml-3`} to="/search/profiles">
              Search Profiles
            </NavLink>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarSecond;