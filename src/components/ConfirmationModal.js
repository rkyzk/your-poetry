import { Modal, Button } from "react-bootstrap";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { useFeaturedProfilesData, useSetFeaturedProfilesData } from "../contexts/FeaturedProfilesDataContext";

const ConfirmationModal = ({show, hideConfirmationModal, id}) => {
  const history = useHistory();
  const currentUser = useCurrentUser();
  const user_id = currentUser?.pk;
  const setFeaturedProfilesData = useSetFeaturedProfilesData();
  
  /**
   * Subtract 1 from poems count in the featured profile
   * if the user is featured.
   */
  const subtractOneFromPoemsCount = () => {
    setFeaturedProfilesData((prevProfiles) => ({
      ...prevProfiles,
      results: prevProfiles.results.map((profile) => {
        return profile.id === user_id
          ? { ...profile, poems_count: profile.poems_count - 1, }
          : profile;
      }),
    }));
  };

  const handleDeletePoem = async () => {
    try {
      await axiosReq.delete(`/poems/${id}`);
      hideConfirmationModal();
      subtractOneFromPoemsCount();
      toast("The poem has been deleted.");
      history.push("/my-poems");
    } catch (err) {
      toast("There was an error.  Please try again.")
    }  
  };

    return (
      <>
        <Modal show={show} onHide={hideConfirmationModal}>
          <Modal.Body closeButton>
            <span>Are you sure you want to delete your poem?
              You won't be able to retrieve it.
              </span> 
          </Modal.Body>
          <Modal.Footer>
            <Button
            onClick={handleDeletePoem}
          >
            delete
          </Button>
          <Button
            onClick={hideConfirmationModal}
          >
            cancel
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ConfirmationModal;