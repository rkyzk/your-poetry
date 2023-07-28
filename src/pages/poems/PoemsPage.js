import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Poem from "./Poem";
import Asset from "../../components/Asset";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";


function PoemsPage({ filter, message = "No results found", heading }) {
  const [poems, setPoems] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const { data } = await axiosReq.get(`/poems/?${filter}`);
        setPoems(data);
        setHasLoaded(true);
      } catch (err) {
        err.response && 
        setErrMsg(`There was an error.  The poems couldn't be loaded.`);
      }
    };
    setHasLoaded(false);
    fetchPoems();
  }, [filter, pathname]);

  return (
    <Col>
      <h2 className="my-2 px-2">{heading}</h2>
      {/* If there's an error message, display it. */}
      {errMsg ?
        <Alert variant="warning" className="mt-3">
          {errMsg}
        </Alert> :
      (hasLoaded ? (
        <>
        {/* If there's no error message, and the data has loaded,
            display the data. */}    
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
              <>
                {/* If there's no poem that matches the filter,
                    display message (no results found, etc). */}
                <p>{message}</p>
              </>
            )}
        </>
        ) : <Asset spinner />) 
      }  
    </Col>
  );
}

export default PoemsPage;