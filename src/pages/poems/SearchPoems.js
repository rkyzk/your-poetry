import React from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from 'react';
import PoemsPage from '../poems/PoemsPage';
import btnStyles from "../../styles/Button.module.css";
import Alert from 'react-bootstrap/Alert';

function SearchPoems() {
  const [filterValues, setFilterValues] = useState({
    author: "",
    title: "",
    keyword: "",
    category: "choose...",
    pub_date: "choose..."
  });
  const { author, title, keyword, category, pub_date } = filterValues;
  const [searchFilter, setSearchFilter] = useState("");
  var filter = "published=1"

  author && (filter = filter + `&owner__profile__display_name__icontains=${author}`);
  title && (filter = filter + `&title__icontains=${title}`);
  keyword && (filter = filter + `&search=${keyword}`);
  category !== "choose..." && (filter = filter + `&category=${category}`);

  if (pub_date !== "choose...") {
    let startDate;
    switch (pub_date) {
      case "past 14 days":
        startDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString().substring(0, 10);  
        break;
      case "past 30 days":
        startDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString().substring(0, 10); 
        break;
      case "past 90 days":
        startDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 90).toISOString().substring(0, 10); 
        break;
      case "past year":
        startDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365).toISOString().substring(0, 10); 
        break;
    }
    filter = filter + `&published_at__date__gte=${startDate}`;
  }

  const handleChange = (event) => {
    setFilterValues({
      ...filterValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearch = () => {
    filter !== "published=1" &&
    setSearchFilter(prevState => {
      return filter;
    });
  };    

  return (
    <>
      <Container>
        <h2>Search Poems<i className="fas fa-search ml-4 mt-2" /></h2>
        <Form
          onSubmit={(event) => event.preventDefault()}
        >
          <Row>
                <Col lg={4}>
                  <Form.Group controlId="author">
                  <Form.Label>author contains:</Form.Label>
                  <Form.Control
                      value={author}
                      onChange={handleChange}
                      type="text"
                      name="author"
                      className="mr-sm-2"
                      placeholder="author"
                      />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="title">
                  <Form.Label>title contains:</Form.Label>
                  <Form.Control
                      value={title}
                      name="title"
                      onChange={handleChange}
                      type="text"
                      className="mr-sm-2"
                      placeholder="title"
                  />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group controlId="keyword">
                  <Form.Label>title/content contains:</Form.Label>
                  <Form.Control
                      value={keyword}
                      name="keyword"
                      onChange={handleChange}
                      type="text"
                      className="mr-sm-2"
                      placeholder="keyword"
                  />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Group contorlId="category">
                    <Form.Label className="my-1 mr-2">
                      category
                    </Form.Label>
                    <Form.Control
                      as="select"
                      className="my-1 mr-sm-2"
                      id="category"
                      name="category"
                      value={category}
                      onChange={handleChange}
                      custom
                    >
                      <option>choose...</option>
                      <option>nature</option>
                      <option>love</option>
                      <option>people</option>
                      <option>humor</option>
                      <option>haiku</option>
                      <option>other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Label className="my-1 mr-2">
                    Published date
                  </Form.Label>
                  <Form.Group>
                    <Form.Control
                      as="select"
                      className="my-1 mr-sm-2"
                      name="pub_date"
                      value={pub_date}
                      id="pub_date"
                      onChange={handleChange}
                      custom
                    >
                      <option>Choose...</option>
                      <option>past 14 days</option>
                      <option>past 30 days</option>
                      <option>past 90 days</option>
                      <option>past year</option>
                    </Form.Control>   
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Button
              onClick={handleSearch}
              className={`${btnStyles.Button} ${btnStyles.Olive}`}
            >
              search
            </Button>
          </Container>
          <Container className="mt-3">
          {/* {searchFilter.replace(/\s/g, "") ? <PoemsPage filter={searchFilter} />
            : <Alert variant='warning'>Please enter at least one field</Alert>} */}
        </Container>
      </>
    );
}

export default SearchPoems;