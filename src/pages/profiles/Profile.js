import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, Button, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes, axiosReq } from "../../api/axiosDefaults";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import { useLocation } from "react-router";
import { useFeaturedProfilesData, useSetFeaturedProfilesData } from "../../contexts/FeaturedProfilesDataContext";


const Profile = (props) => {
  const {
    id,
    owner,
    image,
    display_name,
    followers_count,
    poems_count,
    following_id,
    about_me,
    favorites,
    created_at,
    imageSize = 55,
    mobile,
    featured,
    profilesPage,
    profilePage,
    setProfiles,
    handleReRender
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const { pathname } = useLocation();
  const user_id = currentUser?.profile_id;

  const setFeaturedProfilesData = useSetFeaturedProfilesData();

  const handleFollow = async () => {
    try {
      const { data } = await axiosRes.post("/followers/", { followed: id });
      {setProfiles &&
        setProfiles((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.map((profile) => {
            return profile.id === id
            ? { ...profile, followers_count: profile.followers_count + 1, following_id: data.id }
            : profile;
          }),
        }));
        console.log("hi");
        if (pathname === "/search/profiles") {
          handleReRender();
          console.log("hey");
        }
      }
      setFeaturedProfilesData((prevProfiles) => ({
        ...prevProfiles,
        results: prevProfiles.results.map((profile) => {
          return profile.id === id
            ? { ...profile, followers_count: profile.followers_count + 1, following_id: data.id }
            : profile;
        }),
      })); 
      console.log("Hello"); 
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow= async () => {
    try {
      console.log(following_id);
      await axiosRes.delete(`/followers/${following_id}`);
      if (pathname === `/profiles/${user_id}/following`) {
        setProfiles((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.filter((profile) => {
            return profile.id !== id
          }),
        }));
      }
      {setProfiles &&
        setProfiles((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.map((profile) => {
            return profile.id === id
              ? { ...profile, followers_count: profile.followers_count - 1, following_id: null }
              : profile;
          }),
        }));
      }
      if (pathname === "/search/profiles") {
        handleReRender();
        console.log("hey");
      }    
      setFeaturedProfilesData((prevProfiles) => ({
        ...prevProfiles,
        results: prevProfiles.results.map((profile) => {
          return profile.id === id
            ? { ...profile, followers_count: profile.followers_count - 1, following_id: null }
            : profile;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center">
          {mobile && (
            <>
              <Row>
                <Link to={`/profiles/${id}`}>
                  <div className="d-flex">
                    <Avatar src={image} height={45} />
                    <div>
                      <p className={`ml-0 mb-0 ${styles.MobileName}`}>{display_name}</p>                    
                      <span>
                        {poems_count} poems  
                      </span>                   
                    </div>
                  </div>
                </Link>
              </Row>
            </>
          )}
        {featured && (
          <Row>
            <Col xs={4}>
              <Link to={`/profiles/${id}`}>
                <Avatar src={image} height={imageSize} />
              </Link>
            </Col>
            <Col xs={8}>
              <Link to={`/profiles/${id}`}>
                <h4>{display_name}</h4>
              </Link>
              <span>{poems_count} poems</span>
              <span className="ml-2">{followers_count} followers</span>
            </Col>
          </Row>
        )}
        {profilesPage && (
          <Row>
            <Col xs={4}>
              <Avatar src={image} height={imageSize} />
            </Col>
            <Col xs={8}>
              <Link to={`/profiles/${id}`}>
                <h3>{display_name}</h3>
              </Link>        
              <p className="my-0">Member since {created_at}</p>
              <span>{poems_count} poems</span>
              <span className="ml-2">{followers_count} followers</span>
            </Col>
          </Row>
        )}
        </Media>
        {profilePage && (
         <>
          <Row>
            <Col xs={3}>
              <Avatar src={image} height={120} />
            </Col>
            <Col xs={7}>
              <h3 className="mt-3">{display_name}</h3>
              {is_owner && (
                <ProfileEditDropdown id={id} />
              )}
              <p>Member since {created_at}</p>             
            </Col>
          </Row>
          <div className="mt-3 ml-3">
            {about_me && (
              <>
                <div className="text-muted">About me:</div>
                {about_me}
              </>
            )}
            {favorites && (
              <>
                <div className="text-muted">Favorites:</div>
                {favorites}
              </>)}
            <div>
              <span>{poems_count} poems</span>
              <span className="ml-2">{followers_count} followers</span>
            </div>
          </div>
        </>
      )}
      {!mobile &&
        currentUser &&
        !is_owner &&
        (following_id ? (
          <Button
            className={`${btnStyles.Button} ${btnStyles.BlackOutline} mt-2 ml-4`}
            onClick={() => handleUnfollow()}
          >
            unfollow
          </Button>
        ) : (
          <Button
            className={`${btnStyles.Button} ${btnStyles.Black} mt-2 ml-4`}
            onClick={() => handleFollow()}
          >
            follow
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Profile;