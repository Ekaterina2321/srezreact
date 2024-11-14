import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='section header-block'>
        <Navbar.Brand className='logo'>Chill & Thrill </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className='nav-a'>Главная</NavLink>
            <NavLink to="/catalog" className='nav-a'>Каталог</NavLink>
          </Nav>

          <Button variant="outline-success">Войти</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}