import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Profile from "./Profile";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Asset from "../../components/Asset";
import Alert from "react-bootstrap/Alert";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ProfilesPage(props) {
  const { filter, message, page } = props;
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const [profiles, setProfiles] = useState({ results: [] });
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/?${filter}`);
        console.log(data.results[0]);
        setProfiles(data);
        console.log(filter);
        setHasLoaded(true);
      } catch (err) {
        setErrMsg("There was an error.  The data couldn't be loaded.  Please try again later.");
      }
    }
    setHasLoaded(false);
    fetchProfiles();
  }, [filter]);

    return (
      <Container>
        <Col lg={{ span: 8, offset: 2 }}>
        {page === "profilesPage" && (<h2>Poets I'm following</h2>)}
        {errMsg ?
          <Alert key={errMsg} variant="warning" className="mt-3">{errMsg}</Alert> 
          :
          hasLoaded ? (
            <>
              {profiles.results.length ? (
                <InfiniteScroll
                  children={profiles.results.map((profile) => (
                    <Profile
                      key={profile.id}
                      {...profile} 
                      imageSize={80}
                      page={page}
                      setProfiles={setProfiles}
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
            <Container>
              <Asset spinner />
            </Container>
          )}
        </Col>
      </Container>
    );
}

export default ProfilesPage;