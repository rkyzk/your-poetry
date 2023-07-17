import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Poem from "./Poem";
import Asset from "../../components/Asset";

// import appStyles from "../../App.module.css";
// import styles from "../../styles/PoemsPage.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";


function PoemsPage({ filter, message = "No results found" }) {
  const [poems, setPoems] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [reRender, setReRender] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();
  console.log(filter);

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const { data } = await axiosReq.get(`/poems/?${filter}`);
        setPoems(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchPoems();
  }, [filter, pathname]);

  return (
    <>
      {hasLoaded ? (
          <>
            {poems.results.length ? (
              <InfiniteScroll
                children={poems.results.map((poem) => (
                  <Poem
                    key={poem.id}
                    {...poem}
                    setPoems={setPoems}
                  />
                ))}
                dataLength={poems.results.length}
                loader={<Asset spinner />}
                hasMore={!!poems.next}
                next={() => fetchMoreData(poems, setPoems)}
              />
            ) : (
              <p>{message}</p>
            )}
          </>
        ) : (
          <Asset spinner />
        )}
    </>
  );
}

export default PoemsPage;