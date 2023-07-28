import React from "react";
import styles from "../../styles/Poem.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip"; 
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

/** 
 * Return poem data including title, content or excerpt,
 * author, published date.
 * Hold handleLike und handleUnlike functions.
*/
const Poem = (props) => {
  const {
    /** poem id */
    id,
    /** poem owner */
    owner,
    /** owner's profile id */
    profile_id,
    /** owner's profile name */
    profile_name,
    /** number of comments */
    comments_count,
    /** number of likes */
    likes_count,
    /** like id, if the current user has liked the poem */
    like_id,
    /** poem titel */
    title,
    /** poem content */
    content,
    /** poem category */
    category,
    /** poem's published date */
    published_at,
    /** If called from poem page */
    poemPage,
    /** function to set poem data */
    setPoems,
    /** function to show confirmation modal */
    showConfirmationModal
  } = props;

  /** get currentUser from CurrentUserContext. */
  const currentUser = useCurrentUser();
  /** is_owner tells if the current user is the owner of the poem. */
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  /** get the pathname */
  const { pathname } = useLocation();
  
  /** Display PoemEdit page. */
  const handleEdit = () => history.push(`/poems/${id}/edit`);
  
  /**
   * Request the backend to make a new 'Like' object.
   * Adjust likes count on the front end.
   */
  const handleLike = async () => {
    try {
      // Post 'like' data to the backend.
      const { data } = await axiosRes.post("/likes/", { poem: id });
      /* On popular poems page, update the likes count
         and rearrange the order of poems by descending number of likes. */
      if (pathname === "/popular-poems") {
        setPoems((prevPoems) => ({
          ...prevPoems,
          results: prevPoems.results.map((poem) => {
            return poem.id === id
              ? { ...poem, likes_count: poem.likes_count + 1, like_id: data.id }            
              : poem;
          }).sort((a, b) => b.likes_count - a.likes_count),
        }))
      } else {
        // On other pages, only adjust the number of likes.
        setPoems((prevPoems) => ({
          ...prevPoems,
          results: prevPoems.results.map((poem) => {
            return poem.id === id
              ? { ...poem, likes_count: poem.likes_count + 1, like_id: data.id }            
              : poem;
          }),
        }))
      }
    } catch (err) {
      // If there's an error, display an error message.
      toast("There was an error.  Please try again.");
    }
  };

  /**
   * Request the backend to delete 'Like' object.
   * Adjust likes count on the front end.
   */
  const handleUnlike = async () => {
    try {
      // Reaquest 'Like' object to be deleted in the backend.
      await axiosRes.delete(`/likes/${like_id}`);
      // If the page is "Poems I like," remove the poem from the list.
      if (pathname === "/liked") {
        setPoems((prevPoems) => ({
          ...prevPoems,
          results: prevPoems.results.filter((poem) => {
            return poem.id !== id
          }),
        }));
      } else {
        // On popular poems, adjust the number of likes and the order of the poems.
        if (pathname === "/popular-poems") {
          setPoems((prevPoems) => ({
            ...prevPoems,
            results: prevPoems.results.map((poem) => {
              return poem.id === id
                ? { ...poem, likes_count: poem.likes_count - 1, like_id: null }            
                : poem;
            }).sort((a, b) => b.likes_count - a.likes_count),
          }))
        } else {
          // On other pages only adjust the number of likes.        
          setPoems((prevPoems) => ({
            ...prevPoems,
            results: prevPoems.results.map((poem) => {
              return poem.id === id
                ? (poem.likes_count === 1 ? { ...poem, likes_count: 0, like_id: null }
                  : { ...poem, likes_count: poem.likes_count - 1, like_id: null })
                : poem;
            }),
          }));
        }
      }
    } catch (err) {
      toast("There was an error.  Please try again.");
    }
  };

  return (
    /** Return poem data  */
    <Card className={styles.Poem}>
      <Card.Body className="pr-5">
        {poemPage ? (
          <Row>
            <Card.Title className={`${styles.Title} mb-0 ml-2`}>
              {title && title}
            </Card.Title>
            {/* If the current user is the owner of the poem,
                display three dots for editing */}
            {is_owner && (
              <MoreDropdown
                className="ml-auto"
                handleEdit={handleEdit}
                showConfirmationModal={showConfirmationModal}
              />
            )}
          </Row>
        ) : (
          <Card.Title className={`${styles.Title} mb-0`}>
            {/* If not poem page, link the title to the poem page */}
            <Link className={`${styles.LinkText}`} to={`/poems/${id}`}>
              {title && title}
            </Link>
          </Card.Title>
        )}
        <span className={`${styles.LinkText} ml-4`}> 
          by
          {/* Link the profile name to the profile page. */}
          <Link className={`${styles.LinkText} ml-1`} to={`/profiles/${profile_id}`}>
            {profile_name && (profile_name)}
          </Link>
        </span><br/>
        <Row>
          {/* If published display the published date */}
          <span className={`ml-auto ${styles.PubDate}`}>
          {published_at ? (
            <>Published on {published_at}</>
          ) : (
            <>Not published yet</>    
          )}
          </span>
        </Row>
        {/* If not poem page, display only the first 60 characters.
            If poem page, display the whole content. */}        
        {!poemPage && content ? (
          <Card.Text>{content.substring(0, 60)}...</Card.Text>
        ) : (
          <>
            <Card.Text className={styles.Line}>{content}</Card.Text>
            <p className={`mt-3 text-muted ${styles.Category}`}>Category: {category}</p>
          </>
        )}
        {/* If is_owner, tell they can't like their own poems when
            they hover over the heart icon. */}
        {is_owner ? (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>You can't like your own poem!</Tooltip>}
        >
          <i className="far fa-heart" />
        </OverlayTrigger>
        ) : like_id ? (
          <>
          {/* If like_id exists, handleUnlike will be fired,
              when the icon is clicked. */}
          <span onClick={handleUnlike}>
            <i className={`fas fa-heart ${styles.Heart}`} />
          </span>
          </>
        ) : currentUser ? (
          <>
          {/* If like_id doesn't exist and if the user is logged in,
              handleLike will be fired when the heart is clicked. */}
          <span onClick={handleLike}>
            
            <i className={`far fa-heart ${styles.HeartOutline}`} />
          </span>
          </>
        ) : (
          <>
          {/* If the user is not logged in,
              display a note 'log in to like poems'
              when they hover over the heart icon. */}
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Log in to like poems!</Tooltip>}
          >
            <i className="far fa-heart" />
          </OverlayTrigger>
          </>
        )}
        <span className="ml-1">{likes_count}</span>
        <Link className={`${styles.CommentIcon}`} to={`/poems/${id}`}>
          <i className="far fa-comments ml-2 mr-1" />
        </Link>
        {comments_count}  
      </Card.Body>
    </Card>
  );
};

export default Poem;