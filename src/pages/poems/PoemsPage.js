import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Poem from "./Poem";
import Asset from "../../components/Asset";

// import appStyles from "../../App.module.css";
import styles from "../../styles/PoemsPage.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";


function PoemsPage({ filter, message = "No results found", heading }) {
  const [poems, setPoems] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();
  const [errMsg, setErrMsg] = useState("");
  console.log(filter);
  let customPadding = false;
  if (pathname === "/liked" || pathname === "/my-poems" || pathname === "/search/profiles") {
    customPadding = true;
  }

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const { data } = await axiosReq.get(`/poems/?${filter}`);
        console.log(data);
        setPoems(data);
        setHasLoaded(true);
      } catch (err) {
        if (err.response) {
          setErrMsg(`Something went wrong.
            The poems couldn't be loaded.`);
        };
      }
    };
    setHasLoaded(false);
    fetchPoems();
  }, [filter, pathname]);

  return (
    <Col>
      <h2 className="my-2 px-2">{heading}</h2>
      {errMsg && 
        <Alert key={errMsg} variant="warning" className="mt-3">
          {errMsg}
        </Alert>}
      {!errMsg && hasLoaded && (
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
        )}
        {!errMsg && !hasLoaded &&
          <Asset spinner />}     
    </Col>
  );
}

export default PoemsPage;