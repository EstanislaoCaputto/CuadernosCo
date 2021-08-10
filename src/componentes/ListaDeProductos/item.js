import { Card } from "react-bootstrap";
import Contador from "../contador/Contador.js"
export default function Item({titulo, descripcion, precio, imagen, cantidad, stock}) {
    return (
        
            <Card border="success" style={{ width: '18rem', heigth: '18rem'  }}>
                <Card.Img src={imagen}/>
                <Card.Body>
                    <Card.Title style={{ fontSize: '35px'}}>{titulo}</Card.Title>
                    <Card.Text className="p-2" style={{ fontSize: '15px'}}>
                        {descripcion}
                    </Card.Text>
                    <Card.Text>
                        ${precio}
                    </Card.Text>
                    <Contador inicial={cantidad} stock={stock} />

                </Card.Body>
            </Card>
        
    )
}

