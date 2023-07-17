import { Modal, Button } from "react-bootstrap";

const ConfirmationModal = ({show, poem, handleDelete, hideModal}) => {
    return (
      <>
        <Modal show={show} onHide={hideModal}>
          <Modal.Body closeButton>
           {poem ? (
              <span>Are you sure you want to delete your poem?
                You won't be able to retrieve it.
              </span>
            ) : (
              <span>Are you sure you want to delete your comment?</span>
            )}
          </Modal.Body>
          <Modal.Footer>
          <Button
            onClick={handleDelete}
          >
            delete
          </Button>
          <Button
            onClick={hideModal}
          >
            cancel
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ConfirmationModal;