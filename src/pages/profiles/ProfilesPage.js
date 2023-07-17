import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Profile from "./Profile";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ProfilesPage(props) {
  const { filter, message } = props;
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profiles, setProfiles] = useState({ results: [] });

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/?${filter}`);
        setProfiles(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }
    setHasLoaded(false);
    fetchProfiles();
  }, [filter]);

    return (
      <Container className={appStyles.Content}>
        <h2>Poets I'm following</h2>
        <Col>
          {hasLoaded ? (
            <>
              {profiles.results.length ? (
                <InfiniteScroll
                  children={profiles.results.map((profile) => (
                    <Profile
                      key={profile.id}
                      {...profile} 
                      imageSize={80}
                      setProfiles={setProfiles}
                      profilesPage
                    />
                  ))}
                  dataLength={profiles.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!profiles.next}
                  next={() => fetchMoreData(profiles, setProfiles={setProfiles})}
                  />               
              ) : (
                <p>{message}</p>
              )}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <Asset spinner />
            </Container>
          )}
        </Col>
      </Container>
    );
}

export default ProfilesPage;