import React, { useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { error, userSignUp, signInWithGoogle } = useAuth();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "480px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
              {error && <Alert variant="danger"> {error} </Alert>}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onBlur={handleName}
                  type="text"
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  onBlur={handleEmail}
                  type="email"
                  placeholder="Enter Email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={handlePassword}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onBlur={handleConfirmPassword}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  userSignUp(email, password, confirmPassword, name);
                }}
                className="w-100"
                variant="primary"
                type="submit"
              >
                Sign Up
              </Button>
              <br />
              <br />
              <br />
              <div className="text-center">
                <Button onClick={signInWithGoogle} className="google-btn">
                  <img
                    width="20px"
                    alt="Google sign-in"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  />
                  Google Sign Up
                </Button>
              </div>
            </Form>
            <div className="text-center mt-2">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Signup;

//{error && <Alert variant="danger"> {error} </Alert>}
