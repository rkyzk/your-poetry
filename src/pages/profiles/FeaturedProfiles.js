import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import Profile from "./Profile";
import styles from "../../styles/FeaturedProfiles.module.css";
import { useFeaturedProfilesData } from "../../contexts/FeaturedProfilesDataContext";

const FeaturedProfiles = ({ mobile }) => {
  const { featuredProfilesData, message } = useFeaturedProfilesData();
  console.log("message:");
  console.log(message);
  return (
    <Container
      className={`${appStyles.Content} ${styles.Mobile} ${
        mobile && "d-lg-none mb-3" 
      }`}
    >
      <h4 className={`${styles.Heading}`}>Featured profiles</h4>
      {featuredProfilesData.results.length ? (
        <>
          
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
        message ?
        <Alert variant="warning">{message}</Alert> :
        <Asset spinner />
      )}
    </Container>
  );
};

export default FeaturedProfiles;