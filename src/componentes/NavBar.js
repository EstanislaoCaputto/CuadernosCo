import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from './CartWidget'
import Cartcontext from '../contex/cartContex'
import { useContext } from 'react'


function NavBar (){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                
                <Navbar.Brand href="/">Eclipsamesta</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/quien-soy">¿Quien soy?</Link>
                    <Link className="nav-link" to="/contactos">Contactos</Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        <Link className="dropdown-item" to="/categorias/bitacoras">Bitácoras</Link>
                        <Link className="dropdown-item" to="/categorias/A5">Cuadernos A5</Link>
                        <Link className="dropdown-item" to="/categorias/A6">Cuadernos A6</Link>
                        <Link className="dropdown-item" to="/categorias/reciclados">¡Reciclados!</Link>
                    </NavDropdown>
                    
                </Nav>
                
                
                </Navbar.Collapse>
                <CartWidget />  
            </Container>
        </Navbar>
    )
}

export default NavBar;