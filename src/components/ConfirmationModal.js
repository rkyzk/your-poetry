import { Modal, Button } from "react-bootstrap";
import useToggleModal from "../hooks/useToggleModal";
import { axiosReq } from "../api/axiosDefaults";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ConfirmationModal = ({show, hideConfirmationModal, id}) => {
  const history = useHistory();
  console.log(show);

  const handleDelete = async () => {
    try {
      console.log(id);
      await axiosReq.delete(`/poems/${id}`);
      hideConfirmationModal();
      toast("The poem has been deleted.");
      history.push("/my-poems");
    } catch (err) {
      console.log(err);
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
            onClick={handleDelete}
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