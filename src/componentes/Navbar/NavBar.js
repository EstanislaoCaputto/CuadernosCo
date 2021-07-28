import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from '../botonCompra/CartWidget.js'

function NavBar (){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                
                <Navbar.Brand href="#">Eclipsamesta</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">¿Quien soy?</Nav.Link>
                    <Nav.Link href="#pricing">Contactos</Nav.Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Bitácoras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Cuadernos A5</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Cuadernos A6</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">¡Reciclados!</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Creacion Artística</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;