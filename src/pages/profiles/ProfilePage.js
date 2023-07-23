import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Profile from "./Profile";
import Poem from "../poems/Poem";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Alert from "react-bootstrap/Alert";

function ProfilePage() {
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.pk === parseInt(id);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileData, setProfileData] = useState({ results: [] });
  const [profilePoems, setProfilePoems] = useState({ results: [] });
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: profile }, { data: profilePoems }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/poems/?owner__profile=${id}`),
          ]);
          setProfileData({ results: [profile] });
          setProfilePoems(profilePoems);
          setHasLoaded(true);
      } catch (err) {
        if (err.response?.status === 500) {
          setErrMsg("Server error.  Please try again later.");
        } else if (err.response?.status === 404) {
          setErrMsg("Profile with the given ID doesn't exist.");
        } else {
          setErrMsg("Something went wrong.  Please try again later");
        }
      }
    };
    handleMount();
  }, [id]);

  const poems = (
    <>
      <h4 className="my-3">Poems by this Writer</h4>
      {profilePoems.results.length? (
        <InfiniteScroll
          children={profilePoems.results.map((poem) => (
            <Poem
              key={poem.id}
              {...poem}
              setPoems={setProfilePoems}
            />
          ))}
          dataLength={profilePoems.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePoems.next}
          next={() => fetchMoreData(profilePoems, setProfilePoems)}
        />
      ) : (
        <p>No published poems yet</p>
      )}
    </>
  )
  return (
    <Col
      md={{ span: 8, offset: 2 }}
    >
      {is_owner && <h2>My Profile</h2>}
      {errMsg ? <Alert key={errMsg} variant="warning" className="mt-3">{errMsg}</Alert> : (
        <>
          <Profile
            {...profileData.results[0]}
            page={"profilePage"}
            setProfiles={setProfileData}
          />
          {poems}
        </>
      )}
    </Col> 
  );
}

export default ProfilePage;