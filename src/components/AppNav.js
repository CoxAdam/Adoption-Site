import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNav() {
  return (
    <Navbar bg="dark" variant='dark'>
      <Navbar.Brand as={ Link } to='/'>ADS</Navbar.Brand>
      <Container fluid className="justify-content-end">
        <Nav>
          <Nav.Link as={ Link } to='#'>Signup</Nav.Link>
          <Nav.Link as={ Link } to='#'>Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AppNav