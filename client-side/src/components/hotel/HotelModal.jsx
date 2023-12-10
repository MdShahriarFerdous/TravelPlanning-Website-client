import { Modal, Button } from 'react-bootstrap';

const HotelModal = ({ show, onHide, hotel }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{hotel.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={hotel.thumbnail} alt={hotel.name} style={{ width: '100%' }} />
                {/*<p>{place.description}</p>*/}
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

export default HotelModal;
