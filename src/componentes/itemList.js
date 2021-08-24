import { useEffect, useState } from 'react'
import Item from './item';
import objetos  from '../misObjetos/objeto';

export default function ItemList() {
    const [cargar, setCargar] = useState(false);
    const [cuadernos, setCuadernos] = useState([]);

    useEffect(()=>{
        const promesa = new Promise((resolve, reject) => {
            setCargar(true);
            
            setTimeout(() => resolve(objetos), 2000);
        });

        promesa.then((objetoRespuesta)=>{
            setCargar(false);
            setCuadernos(objetoRespuesta);
            
            
        }).catch((err)=>{
            console.error("algo salio mal", err);
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
                
                    <Item imagen={elCuaderno.imagen} titulo={elCuaderno.titulo} precio={elCuaderno.precio} cantidad={elCuaderno.cantidad} stock={elCuaderno.stock} id={elCuaderno.id}/>

            
                
            
            ))}
            
        </>
    )
};