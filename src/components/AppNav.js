import { Navbar, Nav, Container, NavItem, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUsername, useUpdateUsername } from './UserContext';
import logo from '../cool.png'

function AppNav() {
  const username = useUsername()
  const updateUsername = useUpdateUsername()

  console.log("USERNAME:", username)

  const handleLogout = () => {
    localStorage.setItem('username', '')
    updateUsername('')
  }

  const renderAuthItems = () => {
    if (username == undefined || username == '') {
      return (
        <Nav>
          <Nav.Link as={ Link } to='login/'>Login</Nav.Link>
          <Nav.Link as={ Link } to='signup/'>Signup</Nav.Link>
        </Nav>
      )
    }

    return (
      <Nav>
        <Nav.Link as={ Link } to='/bookmarks'>Bookmarks</Nav.Link>
        <Nav.Link as={ Link } to='/' onClick={ handleLogout }>Logout</Nav.Link>
      </Nav>     
    )
  }

  return (
    <Navbar bg="success" variant='light' fixed='top' className='navbar'>
      <Navbar.Brand as={ Link } to='/'><img className='logo' src={logo} alt='logo'/></Navbar.Brand>
      <NavbarBrand>ADS</NavbarBrand>
      <Container fluid className="justify-content-end">
        { renderAuthItems() }
      </Container>
    </Navbar>
  )
}

export default AppNav