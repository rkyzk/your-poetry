import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Profile from "./Profile";
import ProfilesPage from "./ProfilesPage";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/SearchProfiles.module.css";

import { axiosReq } from "../../api/axiosDefaults";

import FeaturedProfiles from "../profiles/FeaturedProfiles";

function SearchProfiles() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <FeaturedProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
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
        {search && query && (
          <ProfilesPage
            filter={`search=${query}`}
            message="No profiles found with the name."
            search
          />
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <FeaturedProfiles />
      </Col>
    </Row>
  );
}

export default SearchProfiles;