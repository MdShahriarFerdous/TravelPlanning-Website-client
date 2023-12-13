import { Modal, Button } from 'react-bootstrap';

const RestaurantModal = ({ show, onHide, restaurant }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{restaurant.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={restaurant.photo} alt={restaurant.name} style={{ width: '100%' }} />
                <p>{restaurant.description}</p>
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

export default RestaurantModal;
