import React from "react";
import { useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInWithGoogle, error, setError, setIsLoading } = useAuth();

  const location = useLocation();
  const redirect_url = location.state?.from || "/home";
  const history = useHistory();

  const handleGoogleSignIn = () => {
    setError("");
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

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
            {error && <Alert variant="danger"> {error} </Alert>}
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
              <Button className="w-100" variant="primary" type="submit">
                Log In
              </Button>
            </Form>
            <div className="text-center mt-2">
              Need an Account? <Link to="/signup">Sign Up</Link>
            </div>
            <div className="text-center mt-2">
              <Button className="google-btn" onClick={handleGoogleSignIn}>
              <img width="20px"  alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /> 
              Google Sign In
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Login;
