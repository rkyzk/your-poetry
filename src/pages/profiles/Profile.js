import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";


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
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card>
      <Card.Body>
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
      {!mobile &&
        currentUser &&
        !is_owner &&
        (following_id ? (
          <Button
            className={`${btnStyles.Button} ${btnStyles.BlackOutline} mt-2 ml-2`}
          >
            unfollow
          </Button>
        ) : (
          <Button
            className={`${btnStyles.Button} ${btnStyles.Black} mt-2 ml-2`}
          >
            follow
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Profile;