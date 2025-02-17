import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";
import { NavLink } from 'react-router-dom';
export const NavBar = () => {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container className='contenedor'>
            <NavLink className='navegacion' as={NavLink} to="/">
            <Navbar.Brand className='colorNavegacion'  >Sacaloneta Shop</Navbar.Brand>
            </NavLink>
            <Nav className="me-auto ">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/category/Ropa">Ropa</Nav.Link>
              <Nav.Link as={NavLink} to="/category/Accesorios">Accesorios</Nav.Link>
              <Nav.Link as={NavLink} to="category/Coleccionables">Coleccionables</Nav.Link>
            </Nav>
            <CartWidget />
          </Container>
        </Navbar>
        
      </>
    );
  };
