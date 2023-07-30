import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProfilesPage from "./ProfilesPage";
import styles from "../../styles/SearchProfiles.module.css";

function SearchProfiles() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      query.trim() !== "" &&
        setSearch(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <Row className="h-100">
      <Col className="p-2">
        <h3 className="text-center">Search Profiles</h3>
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            sm={{ span: 8, offset: 2 }}
            xs={{ span: 10 }}
          >
            <Form
              className={`${styles.SearchBar} mb-3`}
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className="mr-sm-2"
                placeholder="Search profiles"
              />
            </Form>      
          </Col>
          <Col xs={1}>
            <i className={`fas fa-search ${styles.SearchIcon} mt-2`} />
          </Col>
        </Row>
        {search && query && (
          <ProfilesPage
            filter={`search=${query}`}
            message="No profiles found with the name."
            page={"search"}
          />
        )}
      </Col>
    </Row>
  );
}

export default SearchProfiles;