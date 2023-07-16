import React from "react";
import styles from "../../styles/Poem.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";


const Poem = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_name,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    published_at,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <>
      <Card className={styles.Poem}>
        <Card.Body className="pr-5">
          {title && (
            <Card.Title className={`${styles.Title} mb-0`}>
              {title}
            </Card.Title>
          )}
          <span className={`${styles.LinkText} ml-4`}> 
            by
            <Link className="ml-1">
              {profile_name && (profile_name)}
            </Link>
          </span><br/>
          <Row>
            <span className={`ml-auto ${styles.PubDate}`}>
            {published_at ? (
              <>Published on {published_at}</>
            ) : (
              <>Not published yet</>    
            )}
            </span>
          </Row>          
          {content && (
            <Card.Text>{content}</Card.Text>
          )}
          <div>
            {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own poem!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like poems!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
            {likes_count}
          <Link to={`/poems/${id}`}>
            <i className="far fa-comments ml-2 mr-1" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
    </>
  );
};

export default Poem;