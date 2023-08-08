import React, { useState } from "react";
import CommentEditForm from "./CommentEditForm";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { toast } from "react-toastify";

/**
 * Return Comment component.
 */
const Comment = (props) => {
  /** destructure props */
  const {
    profile_id,
    profile_image,
    owner,
    created_at,
    updated_at,
    content,
    id,
    setPoem,
    setComments,
  } = props;

  /** get info about the logged in user. */
  const currentUser = useCurrentUser();
  /** is_owner is set to true if the user is the owner. */
  const is_owner = currentUser?.username === owner;
  /** showEditForm will be set true if the edit form should be displayed. */
  const [showEditForm, setShowEditForm] = useState(false);

  /**
   * Delete comment in the backend.
   * Adjust the comment count in the front end.
   */
  const handleDeleteComment = async () => {
    try {
      // send request to delete the comment with the id.
      await axiosRes.delete(`/comments/${id}`);
      // set the comment count of the poem 1 less.
      setPoem((prevPoem) => ({
        results: [
          {
            ...prevPoem.results[0],
            comments_count: prevPoem.results[0].comments_count - 1,
          },
        ],
      }));
      // delete the comment from the comments array.
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
      // Display an error message in case of an error.
      toast("There was an error.  Please try again.");
    }
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <Row className={styles.Info}>
            <Col sm={5}>
              <span className={styles.Owner}>{owner}</span>
            </Col>
            {/* If the comment has been edited, label 'edited' */}
            {updated_at !== created_at ? (
              <Col sm={7}>
                <span className={`${styles.Time}`}>{created_at}</span>
                <span className={`${styles.Time} ml-3`}>edited</span>
              </Col>
            ) : (
              <Col sm={7}>
                <span className={`${styles.Time}`}>{created_at}</span>
              </Col>
            )}
          </Row>
          {/* If showEditForm is true, show the edit form. */}
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {/* Display three dots for the owner, if the edit form is not displayed. */}
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDeleteComment={handleDeleteComment}
          />
        )}
      </Media>
    </>
  );
};

export default Comment;
