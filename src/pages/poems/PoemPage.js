import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { axiosReq } from "../../api/axiosDefaults";
import CommentCreateForm from "../comments/CommentCreateForm";
import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "../comments/Comment";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Poem from "./Poem";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import ConfirmationModal from "../../components/ConfirmationModal";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

/**
 * Return content of individual poem pages.
 */
function PoemPage() {
  /** get the poem id from the URL */
  const { id } = useParams();
  /** stores data of the poem */
  const [poem, setPoem] = useState({ results: [] });
  /** stores info about the logged in user. */
  const currentUser = useCurrentUser();
  /** stores profile image of the current user */
  const profile_image = currentUser?.profile_image;
  /** stores comments about the poem */
  const [comments, setComments] = useState({ results: [] });
  /** stores error messages */
  const [errMsg, setErrMsg] = useState("");
  /** if set true, showModal will cause confirmation modal to show up. */
  const [showModal, setShowModal] = useState(false);

  /** the function sets showModal to true */
  const showConfirmationModal = () => setShowModal(true);

  /**  the function set the showModal to false */
  const hideConfirmationModal = () => setShowModal(false);

  useEffect(() => {
    /** get the data of the poem and the comments and set them to variables */
    const handleMount = async () => {
      try {
        // get the data of the poem and the comments about the poem
        const [{ data: poem }, { data: comments }] = await Promise.all([
          axiosReq.get(`/poems/${id}`),
          axiosReq.get(`/comments/?poem__id=${id}`),
        ]);
        // store the data to 'poem'
        setPoem({ results: [poem] });
        // store the data to 'comments'
        setComments(comments);
      } catch (err) {
        // Set error messages.
        if (err.response?.status === 404) {
          setErrMsg("Poem with the given ID doesn't exist.");
        } else {
          setErrMsg("There was an error.  Please try again later");
        }
      }
    };
    handleMount();
  }, [id, showModal]);

  return (
    <>
      <Row className="h-100">
        <Col className="mt-3" md={{ span: 8, offset: 2 }}>
          {/* if there are errors, dislay the error message, otherwise display the poem. */}
          {errMsg ? (
            <Alert variant="warning" key={errMsg}>
              {errMsg}
            </Alert>
          ) : (
            <>
              <Poem
                {...poem.results[0]}
                setPoems={setPoem}
                poemPage
                showConfirmationModal={showConfirmationModal}
              />
              {/* If logged in, display comment form.
                If not, display the heading 'Comments' if there are any comments. */}
              {currentUser ? (
                <CommentCreateForm
                  profile_id={currentUser.profile_id}
                  profileImage={profile_image}
                  poem={id}
                  setPoem={setPoem}
                  setComments={setComments}
                />
              ) : comments.results.length ? (
                "Comments"
              ) : null}
              {/* If there are comments, display them using infinit scroll. */}
              {comments.results.length ? (
                <InfiniteScroll
                  children={comments.results.map((comment) => (
                    <Comment
                      key={comment.id}
                      {...comment}
                      setPoem={setPoem}
                      setComments={setComments}
                    />
                  ))}
                  dataLength={comments.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!comments.next}
                  next={() => fetchMoreData(comments, setComments)}
                />
              ) : currentUser ? (
                <>
                  {/* If there are no comments and if logged in,
                    display the following */}
                  <span>No comments yet, be the first to comment!</span>
                </>
              ) : (
                <>
                  {/* If there are no comments and if not logged in,
                    display the following */}
                  <span>
                    No comments yet.
                    <Link className="ml-2 mr-2" to="/signin">
                      Sign in
                    </Link>
                    to leave a comment.
                  </span>
                </>
              )}
            </>
          )}
        </Col>
      </Row>
      <ConfirmationModal
        show={showModal}
        id={id}
        hideConfirmationModal={hideConfirmationModal}
      />
    </>
  );
}

export default PoemPage;
