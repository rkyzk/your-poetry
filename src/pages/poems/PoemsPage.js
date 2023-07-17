import React, { useEffect, useState } from "react";
import Poem from "./Poem";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/PoemsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function PoemsPage({ filter, message = "No results found" }) {
  const [poems, setPoems] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
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
            poems.results.map((poem) => (
              <Poem
                key={poem.id}
                {...poem}
                setPoems={setPoems}
              />
            ))
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