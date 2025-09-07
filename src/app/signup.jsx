// pages/signup.js
import NavigationBar from '@/app/Component/Navbar';
import { Container, Form, Button } from 'react-bootstrap';

const Signup = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <h1 className="mt-5">Sign Up</h1>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
