import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Profile from "./Profile";
import Poem from "../poems/Poem";
import Asset from "../../components/Asset";

function ProfilePage() {
  const { id } = useParams();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileData, setProfileData] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: profile }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`)
          ]);
          setProfileData({ results: [profile] });
          setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Container>
      <Profile
        {...profileData.results[0]}
        setProfiles={setProfileData}
        profilePage
      />
      <p>poems by this author</p>
  </Container> 
  );
}

export default ProfilePage;