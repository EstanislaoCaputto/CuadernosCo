import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({nombre, precio, imagen, id}) {

    
    return (
        
            <Card border="success" style={{ width: '18rem', heigth: '18rem', margin: '3px'  }}>
                <Card.Img src={imagen}/>
                <Card.Body style={{ padding: '5px'}}>
                    <Card.Title style={{ fontSize: '35px'}}>{nombre}</Card.Title>
                    
                    <Card.Text>
                        ${precio}
                    </Card.Text>
                    <Link to={`/detalles/${id}`} className="btn btn-warning">
                        Detalle del Cuaderno
                    </Link>

                </Card.Body>
            </Card>
        
    )
}

