import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import CommentCreateForm from "../comments/CommentCreateForm";
import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "../comments/Comment";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Poem from "./Poem";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import { useHistory } from "react-router";
import ConfirmationModal from "../../components/ConfirmationModal";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function PoemPage() {
  const { id } = useParams();
  const [poem, setPoem] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });
  const history = useHistory();
  const [errMsg, setErrMsg] = useState("");

  const [showModal, setShowModal] = useState(false);
  const showConfirmationModal = () => setShowModal(true);
  const hideConfirmationModal = () => setShowModal(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: poem }, { data: comments }] = await Promise.all([
          axiosReq.get(`/poems/${id}`),
          axiosReq.get(`/comments/?poem__id=${id}`),
        ]);
        setPoem({ results: [poem] });
        setComments(comments);
      } catch(err) {
        if (err.response?.status === 500) {
          setErrMsg("Server error.  Please try again later.");
        } else if (err.response?.status === 404) {
          setErrMsg("Poem with the given ID doesn't exist.");
        } else {
          setErrMsg("Something went wrong.  Please try again later");
        }
      }
    }
    handleMount();
  }, [id, showModal]);

  return (
    <>
    <Row className="h-100">
      <Col className="mt-3" md={{ span: 8, offset: 2 }}>
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
        {currentUser ?
          (
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
          <span>No comments yet, be the first to comment!</span>
        ) : (
            <span>No comments yet.
              <Link className="ml-2 mr-2" to="/signin" >Sign in</Link>
              to leave a comment.
            </span>
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