import { useEffect, useRef, useState } from "react";

/**
 * When the dropdown menus in the nav bars are open,
 * and if outside the menu is clicked,
 * 'expanded' will be set false so the menu closes.
 */
const useClickOutsideToggle = () => {
  /** 'expanded' tells if the drop down menu is open. */
  const [expanded, setExpanded] = useState(false);
  /** stores info of the elment if the menu has been clicked. */
  const ref = useRef(null);

  /**
   * If outside the menu is clicked,
   * set expanded to false.
   * Return 'expanded', 'setExpanded' and 'ref'.
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    // clean up the event listner
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
