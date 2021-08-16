import { Card } from "react-bootstrap";
import itemDetalle from "./itemDetalle"
import Contador from "../contador/Contador.js"
export default function Item({titulo, precio, imagen, cantidad, stock}) {
    return (
        
            <Card border="success" style={{ width: '18rem', heigth: '18rem'  }}>
                <Card.Img src={imagen}/>
                <Card.Body>
                    <Card.Title style={{ fontSize: '35px'}}>{titulo}</Card.Title>
                    
                    <Card.Text>
                        ${precio}
                    </Card.Text>
                    <Contador inicial={cantidad} stock={stock} />
                    <itemDetalle />

                </Card.Body>
            </Card>
        
    )
}

