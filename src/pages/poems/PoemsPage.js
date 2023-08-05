import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Poem from "./Poem";
import Asset from "../../components/Asset";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import styles from "../../styles/PoemsPage.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

/**
 * Get data of poems and return the list of poems.
 */
function PoemsPage({ filter, message = "No results found", heading }) {
  /** stores poems data */
  const [poems, setPoems] = useState({ results: [] });
  /** hasLoaded will be set true when the data loads. */
  const [hasLoaded, setHasLoaded] = useState(false);
  /** stores the URL of the current page */
  const { pathname } = useLocation();
  /** stores error message */
  const [errMsg, setErrMsg] = useState("");
  /** get current user info */
  const currentUser = useCurrentUser();
  /** tells if padding is necessary  */
  var customPadding;
  (pathname === "/my-poems" || pathname === "/liked") && (customPadding = true);

  /**
   * Get data of poems
   */
  useEffect(() => {
    const fetchPoems = async () => {
      try {
        // get data of poems with the filter
        const { data } = await axiosReq.get(`/poems/?${filter}`);
        setPoems(data);
        setHasLoaded(true);
      } catch (err) {
        // set error message in case of an error
        setErrMsg("There was an error.  The poems couldn't be loaded.");
      }
    };
    setHasLoaded(false);
    fetchPoems();
  }, [filter, pathname, currentUser]);

  return (
    <Col className={`${customPadding && styles.Padding}`}>
      <h2 className="my-2 px-2">{heading}</h2>
      {/* If there's an error message, display it. */}
      {errMsg ? (
        <Alert variant="warning" className="mt-3">
          {errMsg}
        </Alert>
      ) : hasLoaded ? (
        <>
          {/* If there's no error message, and the data has loaded,
            display the data. */}
          {poems.results.length ? (
            <InfiniteScroll
              children={poems.results.map((poem) => (
                <Poem key={poem.id} {...poem} setPoems={setPoems} />
              ))}
              dataLength={poems.results.length}
              loader={<Asset spinner />}
              hasMore={!!poems.next}
              next={() => fetchMoreData(poems, setPoems)}
            />
          ) : (
            <>
              {/* If there's no poem that matches the filter,
                    display message (no results found, etc). */}
              <p>{message}</p>
            </>
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Col>
  );
}

export default PoemsPage;
