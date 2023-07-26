import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

const FeaturedProfilesDataContext = createContext();
const SetFeaturedProfilesDataContext = createContext();

export const useFeaturedProfilesData = () => useContext(FeaturedProfilesDataContext);
export const useSetFeaturedProfilesData = () => useContext(SetFeaturedProfilesDataContext);

export const FeaturedProfilesDataProvider = ({ children }) => {
  const currentUser = useCurrentUser();
  const [featuredProfilesData, setFeaturedProfilesData] = useState({ results: [] });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?featured_flag=1"
        );
        setFeaturedProfilesData(data);     
      } catch (err) {
        setMessage("There was an error. The profiles couldn't be loaded.");
      }
    };
    handleMount();
  }, [currentUser]);

  return (
    <FeaturedProfilesDataContext.Provider value={{featuredProfilesData, message}}>
      <SetFeaturedProfilesDataContext.Provider
        value={setFeaturedProfilesData}
      >
        {children}
      </SetFeaturedProfilesDataContext.Provider>
    </FeaturedProfilesDataContext.Provider>
  );
};