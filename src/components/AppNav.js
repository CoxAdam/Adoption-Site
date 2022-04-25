import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUsername, useUpdateUsername } from './UserContext';

function AppNav() {
  const username = useUsername()
  const updateUsername = useUpdateUsername()

  const handleLogout = () => {
    updateUsername('')
  }

  const renderAuthItems = () => {
    if (username === "") {
      return (
        <Nav>
          <Nav.Link>{username !== "" ? username : "No Username"}</Nav.Link>
          <Nav.Link as={ Link } to='doggo/'>Doggo</Nav.Link>
          <Nav.Link as={ Link } to='login/'>Login</Nav.Link>
          <Nav.Link as={ Link } to='signup/'>Signup</Nav.Link>
        </Nav>
      )
    }

    return (
      <Nav>
        <Nav.Link as={ Link } to='/' onClick={ handleLogout }>Logout</Nav.Link>
      </Nav>     
    )
  }

  return (
    <Navbar bg="dark" variant='dark'>
      <Navbar.Brand as={ Link } to='/'>ADS</Navbar.Brand>
      <Container fluid className="justify-content-end">
        { renderAuthItems() }
      </Container>
    </Navbar>
  )
}

export default AppNav