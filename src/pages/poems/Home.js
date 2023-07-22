import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import PoemsPage from "../poems/PoemsPage";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FeaturedProfiles from "../profiles/FeaturedProfiles";

const intro = (
    <>
      <h2 className="text-center">Welcome!</h2>
      <p className={styles.Intro}>You landed this page, because you love poetry.
        Here you can share your poems, read others' poems,
        give & get feedback.  In this friednly
        and supportive community, you can become better writers.
        Haven't written since high school years?
        Or haven't written a poem before?  Doesn't matter.
        You can read tips to get started and start writing today.
      </p>
    </>
);

function Home() {
  return (
    <Container>
      <Row>
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <FeaturedProfiles mobile />
          {intro}
          <Link
            to="/signup"
            className={`${styles.NavLink} ${styles.Intro}`}>
            Sign up
          </Link><span className={`${styles.Intro} ml-2`}>here.</span>
          <PoemsPage
            filter={`published=1&featured_flag=1&ordering=-created_at&`}
            heading="Featured Poems" 
          />
        </Col>
        <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
          <FeaturedProfiles />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;