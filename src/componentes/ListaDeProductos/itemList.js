import { useEffect, useEstate } from 'react'
import { Card } from 'react-bootstrap';

export default function ItemList() {
    const [cargar, setCargar] = useEstate(false);
    const [cuadernos, setCuadernos] = useEstate([]);

    useEffect(()=>{
        const promesa = new Promise((resolve, reject)=>{
            const objetos =[
                {
                    id:1,
                    titulo:"cuaderno a5",
                    descripcion:"",
                    precio:200,
                    imagen:".../imagenes/cuaderno2",
                    estado: "ok"
                },
                {
                    id:2,
                    titulo:"cuaderno a4",
                    descripcion:"",
                    precio:200,
                    imagen:".../imagenes/cuaderno1.jpg",
                    estado: "ok"
                },
                {
                    id:3,
                    titulo:"cuaderno a6",
                    descripcion:"",
                    precio:200,
                    imagen:".../imagenes/cuaderno3",
                    estado: "ok"
                },
                {
                    id:4,
                    titulo:"cuaderno a3",
                    descripcion:"",
                    precio:200,
                    imagen:".../imagenes/cuaderno4",
                    estado: "ok"
                }
                
            ];


            setCargar(true);
            setTimeout(() => {
            if (objetos.estado === "ok"){
                resolve(objetos)
            }else if (objetos.estado === "404") {
                reject("hubo un error, no se encontro el producto");
            }                
            }, 2000);            
        });

        promesa.then((objetoRespuesta)=>{
            setCargar(false);
            setCuadernos(objetoRespuesta);
        })
        
    },[]);


    if(cargar){
        return(
            <h1>Cargando, porfavor espere...</h1>
        )
    }
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cuadernos.imagen} />
            <Card.Body>
                <Card.Title>{cuadernos.titulo}</Card.Title>
                <Card.Text>
                    {cuadernos.descripcion}
                </Card.Text>
                <Card.Text>
                    {cuadernos.precio}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}