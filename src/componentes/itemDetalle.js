import {useEffect} from "react"
import { Card } from "react-bootstrap";
import Contador from "./Contador";


function ItemDetalle(producto) {
    
    
    return(
        <>
            {console.log("producto detalle", producto)}
            <div className="container" style={{width:'600px'}}>
                <Card>
                    <Card.Img variant="top" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title>
                            {producto.titulo}
                        </Card.Title>
                        <Card.Text>
                            <p>{producto.descripcion}</p>
                            <p>Precio: ${producto.precio}</p>
                            
                            <Contador inicial={producto.cantidad} stock={producto.stock} />
                                                    
                        </Card.Text>
                        

                        
                    </Card.Body>
                </Card>
            </div>

        
        </>
    )
}

export default ItemDetalle