import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBarSecond.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "react-bootstrap";
import useClickOutsideMenuLeft from "../hooks/useClickOutsideMenuLeft";

/**
 * Return the second navigation bar (one on the left side of the page).
 * The component will be displayed on all pages except for
 * signup and signin pages.
 * Render different nav link items depending on the logged in status.
 */
const NavBarSecond = () => {
  /** stores info on the logged in user. */
  const currentUser = useCurrentUser();
  /** get the URL of the current page. */
  const { pathname } = useLocation();
  /** expanded tells wheather the menu bar is expanded/not.
      setExpanded will change the expanded value.
      ref stores info of the element if inside the menu has been clicked */
  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  /** On signin and singup pages set hide true so this component won't appear. */
  let hide = pathname === "/signin" || pathname === "/signup";

  const { poemsMenu, setPoemsMenu, poemsRef } = useClickOutsideMenuLeft();

  /** if the dropdown menu item 'poem' is clicked, keep the menu open. */
  const handlePoemsDropdown = (event) => {
    event.target.id === "poems-dropdown" && setExpanded(true);
    setPoemsMenu(!poemsMenu);
    console.log("buttonFunction");
  };

  console.log(poemsMenu);
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
              <Button
                ref={poemsRef}
                className={`${styles.NavLink} ${styles.PoemsDropdown}`}
                id="poems-dropdown"
                onClick={(event) => handlePoemsDropdown(event)}
              >
                Poems
                <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
              </Button>
              {poemsMenu && (
                <div className={`${styles.PoemsMenu} py-2`}>
                  <div>
                    <NavLink
                      className={styles.NavDropdownItem}
                      to="/new-poems"
                      id="new-poems"
                    >
                      New Poems
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className={styles.NavDropdownItem}
                      to="/popular-poems"
                      id="popular-poems"
                    >
                      Popular Poems
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className={styles.NavDropdownItem}
                      to="/poems-by-categories"
                      id="poems-by-cat"
                    >
                      Poems by Categories
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className={styles.NavDropdownItem}
                      to="/search/poems"
                      id="search-poems"
                    >
                      Search Poems
                    </NavLink>
                  </div>
                </div>
              )}
              {/* if user is logged in, display the link 'Write Poems' */}
              {currentUser && (
                <NavLink
                  className={`${styles.NavLink} ${styles.NavItems} mt-2`}
                  to="/poems/create"
                >
                  Write Poems
                </NavLink>
              )}
              <NavLink
                className={`${styles.NavLink} ${styles.NavItems} mt-2`}
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
