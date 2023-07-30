import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import { toast } from "react-toastify";
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
      toast("There was an error.  Please try again.");
    }
  };

  const handleUnfollow= async () => {
    try {
      await axiosRes.delete(`/followers/${following_id}`);
      {page === "profilesPage" &&
        setProfiles((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.filter((profile) => {
            return profile.id !== id
          }),
        }));
      }
      {(page === "search" || page === "profilePage") &&
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
      toast("There was an error.  Please try again.");
    }
  };

  return (
    <Card className={`${styles.CardSpace} mb-1`}>
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
          <>
          <div className={`${styles.SmallLayout}`}>
            <Row>
              <Col xs={4}>
                <Avatar src={image} height={imageSize} />
              </Col>
              <Col xs={8}>
                <Link to={`/profiles/${id}`}>
                  <h3 className={`${styles.Name}`}>{display_name}</h3>
                </Link>        
                <p className="my-0">Member since {created_at}</p>
                <span>{poems_count} poems</span>
                <span className="ml-2">{followers_count} followers</span>
              </Col>
            </Row>
          </div>
          <div className={`${styles.XSLayout}`}>
            <Row>
              <Col xs={4}>
                <Avatar src={image} height={45} />
              </Col>
              <Col xs={8}>
                <Link to={`/profiles/${id}`}>
                  <h3 className={`${styles.Name} mt-2`}>{display_name}</h3>
                </Link>
              </Col>
            </Row>
            <p className={`${styles.DateJoined} mb-0 mt-2 ml-1`}>Member since {created_at}</p>
            <span className={`${styles.CountsText} ml-1`}>{poems_count} poems</span>
            <span className={`${styles.CountsText} ml-2`}>{followers_count} followers</span>
          </div>
        </>
        )}
        </Media>
        {page === "profilePage" && (
          <>
          <Row style={{ height: "125px" }} className="align-items-center">
            <Col xs={4} className="d-sm-block d-md-none">
              <Avatar src={image} height={80} className={`${styles.Img} align-items-center`} />
            </Col>
            <Col xs={4} className="d-none d-md-block">
              <Avatar src={image} height={120} className={`${styles.Img}`} />
            </Col>       
            <Col xs={7} className={styles.ProfileInfo}>
              <h3 className={`${styles.ProfileName} mt-3`}>{display_name}</h3>
              <p className={`${styles.ProfileText} mb-0`}>Member since {created_at}</p>    
              <div>
                <span className={`${styles.CountsText}`}>{poems_count} poems</span>
                <span className={`${styles.CountsText} ml-2`}>{followers_count} followers</span>
              </div> 
            </Col>
            <Col>
              {is_owner && (
                <ProfileEditDropdown id={id} />
              )}
            </Col>
          </Row>
          <div className="mt-3 ml-3">
            <div className={`${styles.ProfileInfoSmall}`}>
              <h3 className={`${styles.ProfileName} mt-3`}>{display_name}</h3>
              <p className={`${styles.ProfileText} mb-0`}>Member since {created_at}<br/>
              {poems_count} poems
              <span className="ml-2">{followers_count} followers</span>
              </p>
            </div>
            {about_me && about_me !== "null" && (
              <p className={`${styles.ProfileLabel} mt-3`}>
                <span className="text-muted">About me:</span><br/>
                {about_me}
              </p>
            )}
            {favorites && favorites !== "null" && (
              <p className={`${styles.ProfileLabel} mt-3`}>
                <span className="text-muted">My favorites:</span><br/>
                {favorites}
              </p>
            )}
          </div>
        </>
      )}
      {!mobile && currentUser && (
        is_owner ? (
          <div className="mt-2">
            <span
            className={`${btnStyles.You} ml-4`}
            >
              You!
            </span>
          </div>
        ) : (
          following_id ? (
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
          )
        )
      )
      }
      </Card.Body>
    </Card>
  );
};

export default Profile;