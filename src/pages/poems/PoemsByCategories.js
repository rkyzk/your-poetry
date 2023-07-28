import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PoemsPage from "../poems/PoemsPage";
import { useState } from "react";
import styles from "../../styles/PomesByCategories.module.css";
import btnstyles from "../../styles/Button.module.css";
import FeaturedProfiles from "../profiles/FeaturedProfiles";

function PoemsByCategories() {
  // hold info on which category was selected.
  const [category, setCategory] = useState("");
  // set filter statement
  var filter = `published=1&category=${category}&ordering=-published_at`;

  const categories = (
    <div className="d-flex justify-content-center">
      <Button
        className={`${styles.BtnCategories}`}
        onClick={() => {setCategory("nature")}}
      >
        nature
      </Button>
      <Button
        className={`${styles.BtnCategories}`}
        onClick={() => {setCategory("love")}}
      >
        love
      </Button>
      <Button
        className={`${styles.BtnCategories}`}
        onClick={() => {setCategory("people")}}
      >
        people
      </Button>
      <Button
        className={`${styles.BtnCategories}`}
        onClick={() => {setCategory("humor")}}
      >
        humor
      </Button>
      <Button
        className={`${styles.BtnCategories}`}
        onClick={() => {setCategory("haiku")}}
      >
        haiku
      </Button>
      <Button
        className={`${styles.BtnCategories}`}
        onClick={() => {setCategory("other")}}
      >
        other
      </Button>
    </div>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <FeaturedProfiles mobile />
        <h2 className="text-center">Choose a category</h2>
        {categories}
        {category && (
          <>
            <h2 className="text-center mt-3">{category}</h2>
            <PoemsPage filter={filter} />
          </>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <FeaturedProfiles />
      </Col>
    </Row>
  );
}

export default PoemsByCategories;