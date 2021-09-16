import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Item from './item';
//firebase
import { collection, getDocs } from 'firebase/firestore';
import {getData} from '../firebase/index'
// Objetos locales
//import objetos  from '../misObjetos/objeto';

export default function ItemList() {
    const [cargar, setCargar] = useState(true);
    const [cuadernos, setCuadernos] = useState([]);

    useEffect(()=>{
        const getCuadernos = async () => {
            
            //Obtener collecion
            const cuadeColleccion = collection(getData(), 'Productos');
            //obtener Snapchat (lista en ese momento)
            const cuaderSnapshot = await getDocs(cuadeColleccion);

            //Datos en forma de json
            const cuadeList = cuaderSnapshot.docs.map( doc => ({
                id: doc.id,
                ...doc.data()
            }));

            //Estado de mi lista
            
            setCuadernos(cuadeList)
            setCargar(false)

        }

        getCuadernos()
        
    },[])


    if (cargar === true) {
        
        return (
            <>
                <div>
                    <Spinner animation="border" variant="info" />
                    <h1>Cargando, porfavor espere... </h1>
                </div>
            </>
        )
    }

    return(
        
        <>
            
            {cuadernos.map((elCuaderno)=>(
                
                    <Item key={elCuaderno.nombre} {...elCuaderno}/>

            
                
            
            ))}
            
        </>
    )
};