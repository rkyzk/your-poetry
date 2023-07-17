import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../../styles/Homde.module.css";
import appStyles from "../../App.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FeaturedProfiles from "../profiles/FeaturedProfiles";

const intro = (
    <>
      <h2 className="text-center">Welcome!</h2>
      <p className={styles.Intro}>Intro paragraph
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
            Register
          </Link><span className={`${styles.Intro} ml-2`}>here.</span>
          <><h2 className="mt-3" >Featured Poems</h2></>
        </Col>
        <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
          <FeaturedProfiles />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;