import { useEffect, useRef, useState } from "react";

/**
 * When the dropdown menus in the nav bars are open,
 * and if outside the menu is clicked,
 * 'mySpaceExpanded' will be set false so the menu closes.
 */
const useClickOutsideMenuLeft = () => {
  /** 'mySpaceMenu' tells if the drop down menu is open. */
  const [poemsMenu, setPoemsMenu] = useState(false);
  /** stores info of the element if the menu has been clicked. */
  const poemsRef = useRef(null);

  /**
   * If outside the menu is clicked,
   * set mySpaceMenu to false.
   * Return 'mySpaceMenu', 'setMySpaceMenu' and 'ref'.
   */
  useEffect(() => {
    const handleClickOutsideMenuLeft = (event) => {
      if (poemsRef.current && !poemsRef.current.contains(event.target)) {
        setPoemsMenu(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutsideMenuLeft);
    // clean up the event listner
    return () => {
      document.removeEventListener("mouseup", handleClickOutsideMenuLeft);
    };
  }, [poemsRef]);

  return { poemsMenu, setPoemsMenu, poemsRef };
};

export default useClickOutsideMenuLeft;
