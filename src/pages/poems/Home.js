import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/Home.module.css";
import PoemsPage from "../poems/PoemsPage";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FeaturedProfiles from "../profiles/FeaturedProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

/** The heading and the introduction. */
const intro = (
    <>
      <h2 className="text-center">Welcome!</h2>
      <p className={styles.Intro}>You landed this page, because you love poetry.
        Here you can share your poems, read others' poems,
        give & get feedback.  In this friednly
        and supportive community, you can become better writers.
        Haven't written since high school years?
        Or haven't written a poem before?  Doesn't matter.
        Read some poems, get inspired and start writing!
      </p>
    </>
);

/**
 * Return the content of "Home" page.
 * 
 * @returns
 */
function Home() {
  /** set the info of the logged in user to 'currentUser' */
  const currentUser = useCurrentUser();
  return (
    <Container>
      <Row>
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          {/* display featured profiles at the top center for
              screen sizes md or smaller. */}
          <FeaturedProfiles mobile />
          {intro}
          {/* if not logged in, display invitation to sign up. */}
          {!currentUser && (
          <>
            <span className={`${styles.Intro} mt-0`}>Don't have an account yet?</span>
            <Link
              to="/signup"
              className={`${styles.NavLink} ${styles.Intro} ml-2`}>
              Sign up
            </Link>
            <span className={`${styles.Intro} ml-2`}>here.</span>
          </>
          )}
          {/* featured poems section */}
          <PoemsPage
            filter={`published=1&featured_flag=1&ordering=-created_at&`}
            heading="Featured Poems"
          />
        </Col>
        {/* featured profiles for large screen sizes */}
        <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
          <FeaturedProfiles />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;