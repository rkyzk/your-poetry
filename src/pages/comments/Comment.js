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

const Comment = (props) => {
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

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDeleteComment = async () => {
    try {
      await axiosRes.delete(`/comments/${id}`);
      setPoem((prevPoem) => ({
        results: [
          {
            ...prevPoem.results[0],
            comments_count: prevPoem.results[0].comments_count - 1,
          }
        ]
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
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
            <Col sm={5} className={styles.OwnerCol}>
              <span className={styles.Owner}>{owner}</span>
            </Col>
            {updated_at !== created_at ?
            <Col sm={7}>
              <span className={`${styles.Time}`}>{created_at}</span>
              <span className={`${styles.Time} ml-3`}>edited</span>
            </Col> :
            <Col sm={7}>
              <span className={`${styles.Time}`}>{created_at}</span>
            </Col>}
          </Row>
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