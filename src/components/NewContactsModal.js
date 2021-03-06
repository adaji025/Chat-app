import React, { useRef } from "react";
import { Form, Modal, Button } from "react-bootstrap";

const NewContactsModal = ({ closeModal }) => {
  const idRef = useRef();
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // createContact(idRef.current.value, nameRef.current.value)
    closeModal()
  };
  return (
    <>
      <Modal.Header closeButton>create New Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit" className="mt-2">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewContactsModal;
