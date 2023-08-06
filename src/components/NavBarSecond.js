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

  const [poemsMenu, setPoemsMenu] = useState(false);

  const closePoemsMenu = () => {
    const close = setTimeout(() => {
      setPoemsMenu(false);
      console.log("fired");
      document.removeEventListener("mouseup", closePoemsMenu);
    }, 200);
    return () => {
      clearTimeout(close);
    };
  };
  /** if the dropdown menu item 'poem' is clicked, keep the menu open. */
  const handlePoemsDropdown = (event) => {
    event.target.id === "poem-dropdown" && setExpanded(true);
    setPoemsMenu(true);
    document.addEventListener("mouseup", closePoemsMenu);
    console.log("buttonFunction");
  };

  const closeMenu = (event) => {
    console.log("closeMenu");
    if (
      event.target.id === "new-poems" ||
      event.target.id === "popular-poems" ||
      event.target.id === "poems-by-cat" ||
      event.target.id === "search-poems"
    ) {
      setExpanded(false);
    }
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
                className={`${styles.NavLink} ${styles.PoemsDropdown}`}
                id="poem-dropdown"
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
                      onClick={(event) => closeMenu(event)}
                    >
                      New Poems
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className={styles.NavDropdownItem}
                      to="/popular-poems"
                      id="popular-poems"
                      onClick={(event) => closeMenu(event)}
                    >
                      Popular Poems
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className={styles.NavDropdownItem}
                      to="/poems-by-categories"
                      id="poems-by-cat"
                      onClick={(event) => closeMenu(event)}
                    >
                      Poems by Categories
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className={styles.NavDropdownItem}
                      to="/search/poems"
                      id="search-poems"
                      onClick={(event) => closeMenu(event)}
                    >
                      Search
                    </NavLink>
                  </div>
                </div>
              )}
              {/* if user is logged in, display the link 'Write Poems' */}
              {currentUser && (
                <NavLink
                  className={`${styles.NavLink} ${styles.SpaceLeft} mt-2 ml-2`}
                  to="/poems/create"
                >
                  Write Poems
                </NavLink>
              )}
              <NavLink
                className={`${styles.NavLink} ${styles.SpaceLeft} mt-2 ml-3`}
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
