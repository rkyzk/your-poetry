import { useEffect, useRef, useState } from "react";

/**
 * When the dropdown menu in the nav bar is open,
 * and if outside the menu is clicked,
 * 'mySpaceMenu' will be set false so the menu closes.
 */
const useClickOutsideMenuRight = () => {
  /** 'mySpaceMenu' tells if the dropdown menu is open. */
  const [mySpaceMenu, setMySpaceMenu] = useState(false);
  /** stores info of the element if the menu has been clicked. */
  const mySpaceRef = useRef(null);

  /**
   * If outside the menu is clicked,
   * set mySpaceMenu to false.
   * Return 'mySpaceMenu', 'setMySpaceMenu' and 'mySpaceRef'.
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
