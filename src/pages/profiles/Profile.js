import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, Button, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes, axiosReq } from "../../api/axiosDefaults";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
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
    setProfiles,
    mobile,
    featured,
    page
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const user_id = currentUser?.profile_id;
  const setFeaturedProfilesData = useSetFeaturedProfilesData();
  console.log("page");
  console.log(page);
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
      }
      {featured &&
        setFeaturedProfilesData((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.map((profile) => {
            return profile.id === id
              ? { ...profile, followers_count: profile.followers_count + 1, following_id: data.id }
              : profile;
          }),
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow= async () => {
    try {
      console.log(following_id);
      await axiosRes.delete(`/followers/${following_id}`);
      {page === "profilesPage" &&
        setProfiles((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.filter((profile) => {
            return profile.id !== id
          }),
        }));
      }
      {(page === "search" && page === "profilePage") &&
        setProfiles((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.map((profile) => {
            return profile.id === id
              ? { ...profile, followers_count: profile.followers_count - 1, following_id: null }
              : profile;
          }),
        }));
      } 
      {featured &&
        setFeaturedProfilesData((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.map((profile) => {
            return profile.id === id
              ? { ...profile, followers_count: profile.followers_count - 1, following_id: null }
              : profile;
          }),
        }));
      } 
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
                      <span className={`${styles.CountsText}`}>
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
              <span className={`${styles.CountsText}`}>{poems_count} poems</span>
              <span className={`${styles.CountsText} ml-2`}>{followers_count} followers</span>
            </Col>
          </Row>
        )}
        {(page === "profilesPage" || page === "search") && (
          <Row>
            <Col xs={4}>
              <Avatar src={image} height={imageSize} />
            </Col>
            <Col xs={8}>
              <Link to={`/profiles/${id}`}>
                <h3>{display_name}</h3>
              </Link>        
              <p className="my-0">Member since {created_at}</p>
              <span className={`${styles.CountsText}`}>{poems_count} poems</span>
              <span className={`${styles.CountsText} ml-2`}>{followers_count} followers</span>
            </Col>
          </Row>
        )}
        </Media>
        {page === "profilePage" && (
         <>
          <Row>
            <Col md={3}>
              <Avatar src={image} height={120} className={`${styles.Img}`} />
            </Col>
            <Col md={7}>
              <h3 className="mt-3">{display_name}</h3>
              {is_owner && (
                <ProfileEditDropdown id={id} />
              )}
              <p className="mb-0">Member since {created_at}</p>    
              <div>
                <span className={`${styles.CountsText}`}>{poems_count} poems</span>
                <span className={`${styles.CountsText} ml-2`}>{followers_count} followers</span>
              </div>         
            </Col>
          </Row>
          <div className="mt-3 ml-3">
            {about_me &&  about_me !== "null" && (
              <>
                <div className="text-muted">About me:</div>
                {about_me}
              </>
            )}
            {favorites && favorites !== "null" && (
              <>
                <div className="text-muted">Favorites:</div>
                {favorites}
              </>)}
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