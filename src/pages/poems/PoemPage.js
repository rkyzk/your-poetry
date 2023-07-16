import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";

function PoemPage() {
  const { id } = useParams();
  const [poem, setPoem] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: poem }] = await Promise.all([
          axiosReq.get(`/poems/${id}`),
        ]);
        console.log(poem);
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
      {poem.results.length && (poem.results[0].title)}
      </Container> 
    </Row>
  );
}

export default PoemPage;