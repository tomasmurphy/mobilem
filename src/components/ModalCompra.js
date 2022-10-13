import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from "./Form";

function ModalCompra({ cart, total, clearCart, handleId }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn'  onClick={handleShow}>
                Comprar
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form cart={cart}
                        total={total}
                        clearCart={clearCart}
                        handleId={handleId}></Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalCompra;