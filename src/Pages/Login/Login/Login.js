import React from "react";
import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signInWithGoogle} = useFirebase();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 login-page" style={{ maxWidth: "480px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            <Form>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  onBlur={handleEmail}
                  type="email"
                  placeholder="Enter Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={handlePassword}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                
                className="w-100"
                variant="primary"
                type="submit"
              >
                Log In
              </Button>
            </Form>
            <div className="text-center mt-2">
              Need an Account? <Link to="/signup">Sign Up</Link>
            </div>
            <div className="text-center mt-2">
              <Button 
              onClick={signInWithGoogle}
              >Google Sign In</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Login;

// {error && <Alert variant="danger"> {error} </Alert>}
