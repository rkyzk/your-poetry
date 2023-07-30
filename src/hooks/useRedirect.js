import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

/**
 * Redirect users to "Home"
 * if they navigate to pages they shouldn't
 * be able to access.
 * @param {useAuthStatus}
 */
export const useRedirect = (userAuthStatus) => {
  /** stores info about which pages the user has visited. */
  const history = useHistory();
  
  /**
   * 
   */
  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        // if user is logged in, the code below will run
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // if user is not logged in, the code below will run
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};