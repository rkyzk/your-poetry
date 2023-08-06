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
import { useSetFeaturedProfilesData } from "../../contexts/FeaturedProfilesDataContext";

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
    page,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const setFeaturedProfilesData = useSetFeaturedProfilesData();

  const handleFollow = async () => {
    try {
      const { data } = await axiosRes.post("/followers/", { followed: id });

      setProfiles &&
        setProfiles((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.map((profile) => {
            return profile.id === id
              ? {
                  ...profile,
                  followers_count: profile.followers_count + 1,
                  following_id: data.id,
                }
              : profile;
          }),
        }));

      featured &&
        setFeaturedProfilesData((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.map((profile) => {
            return profile.id === id
              ? {
                  ...profile,
                  followers_count: profile.followers_count + 1,
                  following_id: data.id,
                }
              : profile;
          }),
        }));
    } catch (err) {
      toast("There was an error.  Please try again.");
    }
  };

  const handleUnfollow = async () => {
    try {
      await axiosRes.delete(`/followers/${following_id}`);
      page === "profilesPage" &&
        setProfiles((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.filter((profile) => {
            return profile.id !== id;
          }),
        }));
      (page === "search" || page === "profilePage") &&
        setProfiles((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.map((profile) => {
            return profile.id === id
              ? {
                  ...profile,
                  followers_count: profile.followers_count - 1,
                  following_id: null,
                }
              : profile;
          }),
        }));
      featured &&
        setFeaturedProfilesData((prevProfiles) => ({
          ...prevProfiles,
          results: prevProfiles.results.map((profile) => {
            return profile.id === id
              ? {
                  ...profile,
                  followers_count: profile.followers_count - 1,
                  following_id: null,
                }
              : profile;
          }),
        }));
    } catch (err) {
      toast("There was an error.  Please try again.");
    }
  };

  return (
    <Card className="mb-1">
      <Card.Body>
        {mobile ? (
          <Row className={`${styles.Mobile} justify-content-center`}>
            <Link className={styles.ProfileLink} to={`/profiles/${id}`}>
              <Avatar src={image} height={45} />
              <Media>
                <div>
                  <p className={`ml-0 mb-0 ${styles.MobileName}`}>
                    {display_name}
                  </p>
                  <span className={`${styles.CountsText}`}>
                    {poems_count} poems
                  </span>
                </div>
              </Media>
            </Link>
          </Row>
        ) : featured ? (
          <Media className="align-items-center">
            <Row>
              <Col xs={4}>
                <Link className={styles.ProfileLink} to={`/profiles/${id}`}>
                  <Avatar src={image} height={imageSize} />
                </Link>
              </Col>
              <Col xs={8}>
                <Link className={styles.ProfileLink} to={`/profiles/${id}`}>
                  <h4 className={`${styles.FeaturedName}`}>{display_name}</h4>
                </Link>
                <span className={`${styles.ProfileText}`}>
                  {poems_count} poems
                </span>
                <span className={`${styles.ProfileText} ml-2`}>
                  {followers_count} followers
                </span>
              </Col>
            </Row>
          </Media>
        ) : (
          <>
            <Row style={{ height: "100px" }} className="pt-2">
              <Col xs={4}>
                <Avatar src={image} height={80} className={`${styles.Img}`} />
              </Col>
              {/* display the user info (the name, the date joinged etc)
                next to the avatar for screen sizes above 490px
                className ProfileInfo won't be displayed below 490px. */}
              <Col xs={7} className={styles.ProfileInfo}>
                <h3 className={`${styles.ProfileName}`}>{display_name}</h3>
                <p className={`${styles.ProfileText} mb-0`}>
                  Member since {created_at}
                </p>
                <span className={`${styles.ProfileText}`}>
                  {poems_count} poems
                </span>
                <span className={`${styles.ProfileText} ml-2`}>
                  {followers_count} followers
                </span>
              </Col>
              <Col>{is_owner && <ProfileEditDropdown id={id} />}</Col>
            </Row>
            <div className="mt-3 ml-3">
              {/* display the user info (the name, the date joinged etc)
                below the avatar for screen sizes below 490px
                className ProfileInfoSmall will be displayed only below 490px. */}
              <div className={`${styles.ProfileInfoSmall}`}>
                <h3 className={`${styles.ProfileName}`}>{display_name}</h3>
                <p className={`${styles.ProfileText} mb-0`}>
                  Member since {created_at}
                  <br />
                  {poems_count} poems
                  <span className="ml-2">{followers_count} followers</span>
                </p>
              </div>
              {/* on ProfilePage, display about me and favorites. */}
              {about_me && about_me !== "null" && (
                <p className={`${styles.ProfileLabel} mt-3`}>
                  <span className="text-muted">About me:</span>
                  <br />
                  {about_me}
                </p>
              )}
              {favorites && favorites !== "null" && (
                <p className={`${styles.ProfileLabel} mt-3`}>
                  <span className="text-muted">My favorites:</span>
                  <br />
                  {favorites}
                </p>
              )}
            </div>
          </>
        )}
        {!mobile &&
          currentUser &&
          (is_owner ? (
            <div className="mt-2">
              <span className={`${btnStyles.You} ml-4`}>You!</span>
            </div>
          ) : following_id ? (
            <Button
              className={`${btnStyles.Button} ${btnStyles.LightBlue} mt-2 ml-4`}
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
