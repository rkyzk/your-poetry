import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import Profile from "./Profile";
import styles from "../../styles/FeaturedProfiles.module.css";
import { useFeaturedProfilesData } from "../../contexts/FeaturedProfilesDataContext";

const FeaturedProfiles = ({ mobile }) => {
  const featuredProfilesData = useFeaturedProfilesData();

  return (
    <Container
      className={`${appStyles.Content} ${styles.Mobile} ${
        mobile && "d-lg-none mb-3" 
      }`}
    >
      {featuredProfilesData.results.length ? (
        <>
          <h4>Featured profiles</h4>
          {mobile ? (
            <Row>
              {featuredProfilesData.results.map((profile) => (
                <Col>
                  <Profile
                  key={profile.id}
                  {...profile}
                  mobile
                  />
                </Col>
              ))}
            </Row>
          ) : (
            featuredProfilesData.results.map((profile) => (
              <Profile
                key={profile.id}
                {...profile}
                imageSize={55}
                featured
              />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default FeaturedProfiles;