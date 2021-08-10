import { useEffect, useState } from 'react'
import Item from './item';

export default function ItemList() {
    const [cargar, setCargar] = useState(false);
    const [cuadernos, setCuadernos] = useState([]);

    useEffect(()=>{
        const promesa = new Promise((resolve, reject) => {
            setCargar(true);
            const objetos = [
                {
                    id: 1,
                    titulo: "Mandala",
                    descripcion: "Cuaderno-Bitácora Mandala A5 dibujado y pintado a mano con pintura acrílica. Contiene carátula y 80 hojas lisas para escribir, dibujar y expresarte como más quieras!",
                    precio: 200,
                    imagen: "src/imagenes/Cuadernos/cuaderno1.jpg",
                    estado: "ok",
                    stock:10,
                    cantidad:0
                },
                {
                    id: 2,
                    titulo: "Peces",
                    descripcion: "Cuaderno- Bitácora Peces A5 dibujado y pintado a mano. Este cuaderno fue hecho con diseño a pedido. Contiene carátula y 80 hojas lisas para escribir, dibujar y expresarse como desee!",
                    precio: 200,
                    imagen: "src/imagenes/Cuadernos/cuaderno4.jpg",
                    estado: "ok",
                    stock:10,
                    cantidad:0
                },
                {
                    id: 3,
                    titulo: "Ella",
                    descripcion: "Cuaderno- Bitácora Ella A5 pintado a mano y con imagen adhesiva. Este cuaderno fue hecho con diseño a pedido. Contiene carátula, sobre y 80 hojas lisas para escribir, dibujar y expresarse como desee!",
                    precio: 200,
                    imagen: "src/imagenes/Cuadernos/cuaderno2.jpg",
                    estado: "ok",
                    stock:10,
                    cantidad:0
                },
                {
                    id: 4,
                    titulo: "Árbol",
                    descripcion: "Cuaderno-Bitácora Árbol A5 dibujado y pintado a mano. Este cuader fue hecho a pedido con diseño propio. Contiene carátula y 80 hojas para escribir, dibujar y expresarse como desee!",
                    precio: 200,
                    imagen: "src/imagenes/Cuadernos/cuaderno1.jpg",
                    estado: "ok",
                    stock:10,
                    cantidad:0
                }

            ];
            setTimeout(() => resolve(objetos), 2000);
        });

        promesa.then((objetoRespuesta)=>{
            setCargar(false);
            setCuadernos(objetoRespuesta);
            
            
        }).catch((err)=>{
            console.log("algo salio mal");
            setCargar(false)
        })
        
    },[]);


    if (cargar === true) {
        
        return (
            
            <h1>Cargando, porfavor espere... </h1>
        )
    }

    return(
        
        <>
            
            {cuadernos.map((elCuaderno)=>(
            <Item imagen={elCuaderno.imagen} titulo={elCuaderno.titulo} precio={elCuaderno.precio} descripcion={elCuaderno.descripcion} cantidad={elCuaderno.cantidad} stock={elCuaderno.stock}/>
            
            ))}
            
        </>
    )
};