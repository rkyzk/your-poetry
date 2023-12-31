import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { axiosReq } from "../api/axiosDefaults";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { useSetFeaturedProfilesData } from "../contexts/FeaturedProfilesDataContext";
import styles from "../styles/ConfirmationModal.module.css";
import btnStyles from "../styles/Button.module.css";

/**
 * Return Confirmation modal.
 * The modal will be displayed when 'show' is set to true.
 */
const ConfirmationModal = ({ show, hideConfirmationModal, id }) => {
  /** store info on which pages the user has visited. */
  const history = useHistory();
  /** get the info of the logged-in user. */
  const currentUser = useCurrentUser();
  /** store the current user's id */
  const user_id = currentUser?.pk;
  /** get the function setFeaturedProfilesData */
  const setFeaturedProfilesData = useSetFeaturedProfilesData();

  /**
   * Subtract 1 from poems count in the featured profiles
   * if the user is featured.
   */
  const subtractOneFromPoemsCount = () => {
    setFeaturedProfilesData((prevProfiles) => ({
      ...prevProfiles,
      results: prevProfiles.results.map((profile) => {
        return profile.id === user_id
          ? { ...profile, poems_count: profile.poems_count - 1 }
          : profile;
      }),
    }));
  };

  /** delete a poem from the backend,
      hide confirmation modal and send the user to 'My Poems' page. */
  const handleDeletePoem = async () => {
    try {
      await axiosReq.delete(`/poems/${id}`);
      hideConfirmationModal();
      // In case the user's featured, adjust the poems count on the front end.
      subtractOneFromPoemsCount();
      toast("The poem has been deleted.");
      history.push("/my-poems");
    } catch (err) {
      // In case of an error, notify the user.
      toast("There was an error.  Please try again.");
    }
  };

  return (
    <>
      {/* The modal will appear if show is true */}
      <Modal show={show} onHide={hideConfirmationModal}>
        <Modal.Body closeButton>
          <span className={styles.Text}>
            Are you sure you want to delete your poem? You won't be able to
            retrieve it.
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Olive}`}
            onClick={handleDeletePoem}
          >
            delete
          </Button>
          {/* hideConfirmationModal will set 'show' false. */}
          <Button
            onClick={hideConfirmationModal}
            className={`${btnStyles.Button} ${btnStyles.Olive}`}
          >
            cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
