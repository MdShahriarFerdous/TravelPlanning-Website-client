import { Modal, Button } from 'react-bootstrap';

const PlaceModal = ({ show, onHide, place }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{place.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={place.photo} alt={place.name} style={{ width: '100%' }} />
                <p>{place.description}</p>
                {/* Add other restaurant details here */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PlaceModal;
