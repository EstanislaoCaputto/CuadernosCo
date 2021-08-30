import { Card } from "react-bootstrap";
import Contador from "./Contador";


function ItemDetalle(producto) {
    
    
    return(
        <>
            
            <div className="container" style={{width:'350px'}}>
                <Card>
                    <Card.Img variant="top" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title>
                            <h2>{producto.titulo}</h2>
                        </Card.Title>
                        <Card.Text>
                            <p>{producto.descripcion}</p>
                            <p>$ {producto.precio}</p>
                                                                                
                        </Card.Text>
                        
                        <Contador inicial={producto.cantidad} stock={producto.stock}/>
                        
                        
                    </Card.Body>
                </Card>
            </div>

        
        </>
    )
}

export default ItemDetalle