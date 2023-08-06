import { useEffect, useRef, useState } from "react";

/**
 * When the dropdown menu in the nav bar is open,
 * and if outside the menu is clicked,
 * 'poemsMenu' will be set false so the menu closes.
 */
const useClickOutsideMenuLeft = () => {
  /** 'poemsMenu' tells if the dropdown menu is open. */
  const [poemsMenu, setPoemsMenu] = useState(false);
  /** stores info of the element if the menu has been clicked. */
  const poemsRef = useRef(null);

  /**
   * If outside the menu is clicked,
   * set poemsMenu to false.
   * Return 'poemsMenu', 'setPoemsMenu' and 'poemsRef'.
   */
  useEffect(() => {
    const handleClickOutsideMenuLeft = (event) => {
      const togglePoemsMenu = setTimeout(() => {
        if (poemsRef.current && !poemsRef.current.contains(event.target)) {
          setPoemsMenu(false);
        }
      }, 200);
      return () => {
        clearTimeout(togglePoemsMenu);
      };
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
