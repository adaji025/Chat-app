import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from 'uuid'

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  const createNewId = () => {
      onIdSubmit(uuidV4())
  }
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-md-50">
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="ml-0 ">Login</Button>
        <Button onClick={createNewId} className="m-2">Create New Id</Button>
      </Form>
    </Container>
  );
};

export default Login;
