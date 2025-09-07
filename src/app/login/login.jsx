// pages/login.js
import NavigationBar from '@/app/Component/Navbar';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <h1 className="mt-5">Login</h1>
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
