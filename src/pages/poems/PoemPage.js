import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Poem from "./Poem";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentCreateForm from "../comments/CommentCreateForm";

function PoemPage() {
  const { id } = useParams();
  const [poem, setPoem] = useState({ results: [] });
  const currentUser = useCurrentUser;
  const profile_image = currentUser?.profile_image;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: poem }] = await Promise.all([
          axiosReq.get(`/poems/${id}`),
        ]);
        setPoem({ results: [poem] });
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
        {currentUser && (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              poem={id}
              setPoem={setPoem}
            />
          )}       
      </Container> 
    </Row>
  );
}

export default PoemPage;