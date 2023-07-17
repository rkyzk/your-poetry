import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import CommentCreateForm from "../comments/CommentCreateForm";
import Comment from "../comments/Comment";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Poem from "./Poem";

function PoemPage() {
  const { id } = useParams();
  const [poem, setPoem] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

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
        console.log(`Error occured: ${err}`);
      }
    }
    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Container className={appStyles.Content}>
      <Poem
        {...poem.results[0]}
        setPoems={setPoem}
        poemPage
      />
        {currentUser && 
          poem?.published_at ? (
          <CommentCreateForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            poem={id}
            setPoem={setPoem}
            setComments={setComments}
          />
        ) : comments.results.length ? (
          comments.results.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        ) : null}
      </Container>  
    </Row>
  );
}

export default PoemPage;