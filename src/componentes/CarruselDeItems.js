import Carousel from 'react-bootstrap/Carousel'
import objetos from '../misObjetos/objeto'


function Carrusel() {
    
    return (
        <Carousel fade variant= 'dark'>
            <Carousel.Item>
                <img
                    style={{ height:'450px'}}
                    className="d-block w-100"
                    src= {require( '../componentes/imagenProductos/cuaderno1.jpg' ).default}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Elegi tu estilo</h3>
                    <p>Creacion de cuadernos artesanales a tu gusto</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height:'450px'}}
                    className="d-block w-100"
                    src={require( '../componentes/imagenProductos/cuaderno2.jpg' ).default}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Aprovecha las Promos</h3>
                    <p>Envios en toda Córdoba capital</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height:'450px'}}
                    className="d-block w-100"
                    src={require( '../componentes/imagenProductos/cuaderno3.jpg' ).default}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>CuadernosCo</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
    
}

export default Carrusel;