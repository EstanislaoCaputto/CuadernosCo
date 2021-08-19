import { useState, useEffect } from "react";
import objetos from './objeto'
// import { useParams } from "react-router-dom"


const Itemdetalle = (() => {
    // const{id} = useParams()
    const [cargar, setCargar] = useState(false);
    const [detalle, setDetalle] = useState([]);

    useEffect(()=>{
        const promesa = new Promise((resolve, reject) => {
            setCargar(true);
            
            setTimeout(() => resolve(objetos), 2000);
        });

        promesa.then((objetoRespuesta)=>{
            setCargar(false);
            setDetalle(objetoRespuesta);
            
            
        }).catch((err)=>{
            console.log("algo salio mal");
            setCargar(true)
        })
        
    },[]);
    // se puede usar fetch con un archivo local? (si, por ejemplo "objeto.js" fuera un archivo JSON)
    // const getCuaderno = async ()=>{
    //     try{
    //         setCargar(true);
    //         const respuesta = await fetch(`src/componentes/ListaDeProductos/objeto${id}`);
    //         const dato = await respuesta.json();
    //         console.log(dato)
    //         setDetalle(dato);
    //         setCargar(false)
    //     } catch(error){console.log("error", error);}
    // }
    // useEffect(()=>{
    //     getCuaderno();
    // },[]);

    if(cargar){
        return(
            <h1>Cargando</h1>
        )
    }

    return(
        <h1>
            {detalle.titulo}        
        </h1>
    )
})

export default Itemdetalle