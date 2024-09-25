import { Modal, Button } from 'react-bootstrap';

const ProductModal = ({ selectedProduct, handleCloseModal}) => {
    return(
        <Modal show={!!selectedProduct} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Price: £{selectedProduct.price}</p>
            {/* Add more details here */}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default ProductModal;
