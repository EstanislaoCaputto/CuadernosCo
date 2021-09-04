import { Card } from "react-bootstrap";

export default function Carrito({item}) {
    return(
        <>
            <Card>
            <Card border="success" style={{ width: '18rem', heigth: '18rem', margin: '3px'  }}>
                <Card.Body style={{ padding: '5px'}}>
                    <Card.Title style={{ fontSize: '35px'}}>{item.titulo}</Card.Title>
                    <Card.Text>
                        ${item.precio * item.stock}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Card>
        </>
    )
}