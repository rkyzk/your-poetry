import { useEffect, useRef, useState } from "react";

/**
 * When the dropdown menus in the nav bars are open,
 * and if outside the menu is clicked,
 * 'mySpaceExpanded' will be set false so the menu closes.
 */
const useClickOutsideMenuRight = () => {
  /** 'mySpaceMenu' tells if the drop down menu is open. */
  const [mySpaceMenu, setMySpaceMenu] = useState(false);
  /** stores info of the elment if the menu has been clicked. */
  const mySpaceRef = useRef(null);

  /**
   * If outside the menu is clicked,
   * set mySpaceMenu to false.
   * Return 'mySpaceMenu', 'setMySpaceMenu' and 'ref'.
   */
  useEffect(() => {
    const handleClickOutsideMenuRight = (event) => {
      const toggleMenu = setTimeout(() => {
        if (mySpaceRef.current && !mySpaceRef.current.contains(event.target)) {
          setMySpaceMenu(false);
        }
      }, 200);
      return () => {
        clearTimeout(toggleMenu);
      };
    };
    document.addEventListener("mouseup", handleClickOutsideMenuRight);
    // clean up the event listner
    return () => {
      document.removeEventListener("mouseup", handleClickOutsideMenuRight);
    };
  }, [mySpaceRef]);

  return { mySpaceMenu, setMySpaceMenu, mySpaceRef };
};

export default useClickOutsideMenuRight;
