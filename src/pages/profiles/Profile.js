import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, Button, Row, Col } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
    profilePage,
    featured,
    profilesPage,
    setProfiles,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
    } catch (err) {
      console.log(err);
    };
  };

  const handleUnfollow= async () => {
    try {
      console.log(following_id);
      await axiosRes.delete(`/followers/${following_id}`);
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
    } catch (err) {
      console.log(err);
    };
  };

  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center">
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
        {profilePage && (
          <>
          <Row>
            <Col xs={5}>
              <Avatar src={image} height={120} />
            </Col>
            <Col xs={7}>
              <h3 className="mt-3">{display_name}</h3>
              <p>Member since {created_at}</p>             
            </Col>
          </Row>
            {about_me && (
              <>
                <div className="text-muted">About me</div>
                {about_me}
              </>
            )}
            {favorites && (
              <>
                <div className="text-muted">Favorites</div>
                {favorites}
              </>)}
            <div>
              <span>{poems_count} poems</span>
              <span className="ml-2">{followers_count} followers</span>
            </div>
          </>
        )}
      {!mobile &&
        currentUser &&
        !is_owner &&
        (following_id ? (
          <Button
            className={`${btnStyles.Button} ${btnStyles.BlackOutline} mt-2 ml-2`}
            onClick={() => handleUnfollow()}
          >
            unfollow
          </Button>
        ) : (
          <Button
            className={`${btnStyles.Button} ${btnStyles.Black} mt-2 ml-2`}
            onClick={() => handleFollow()}
          >
            follow
          </Button>
        ))}
      </Media>
      </Card.Body>
    </Card>
  );
};

export default Profile;