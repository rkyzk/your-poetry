import React from "react";
import styles from "../../styles/Poem.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import ConfirmationModal from "../../components/ConfirmationModal";

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
    poemPage,
    setPoems,
    showConfirmationModal
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/poems/${id}/edit`);
  }

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { poem: id });
      setPoems((prevPoems) => ({
        ...prevPoems,
        results: prevPoems.results.map((poem) => {
          return poem.id === id
            ? { ...poem, likes_count: poem.likes_count + 1, like_id: data.id }            
            : poem;
        }),
      }))
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}`);
      setPoems((prevPoems) => ({
        ...prevPoems,
        results: prevPoems.results.map((poem) => {
          return poem.id === id
            ? (poem.likes_count === 1 ? { ...poem, likes_count: 0, like_id: null }
              : { ...poem, likes_count: poem.likes_count - 1, like_id: null })
            : poem;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Card className={styles.Poem}>
        <Card.Body className="pr-5">
          {poemPage ? (
            <>
              <Row>
                <Card.Title className={`${styles.Title} mb-0`}>
                  {title && title}
                </Card.Title>
                {is_owner && (
                  <MoreDropdown
                    className="ml-auto"
                    handleEdit={handleEdit}
                    showConfirmationModal={showConfirmationModal}
                  />
                )}
              </Row>
            </>
          ) : (
            <Card.Title className={`${styles.LinkText} ${styles.Title} mb-0`}>
              <Link to={`/poems/${id}`}>
                {title && title}
              </Link>
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
          {content && !poemPage ? (
            <Card.Text>{content.substring(0, 60)}</Card.Text>
          ) : (
            <Card.Text className={styles.Line}>{content}</Card.Text>
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
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
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