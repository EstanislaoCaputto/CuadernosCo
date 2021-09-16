import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ItemDetalle from "./itemDetalle";
import { getDoc, doc } from 'firebase/firestore';
import { getData } from '../firebase/index'

function ItemDetalleContenedor() {
  const { laReferencia } = useParams();
  const [producto, setProducto] = useState([]);
  const [cargar, setCargar] = useState(true);


  useEffect(()=>{
    const getProducto = async() =>{
      const produReference = doc(getData(), 'Productos', laReferencia);
      const produSnap = await getDoc(produReference);
      
      setProducto({
        ...produSnap.data(),
        id: produSnap.id 
      });
      setCargar(false)
    }
    getProducto();
  },[laReferencia]);

  
    

  if (cargar) {
    return (
      <>
        <div>
          <Spinner animation="border" variant="info" />
          <h1>Cargando, porfavor espere... </h1>
        </div>
      </>
    )
  }

  return (
      <>
        <ItemDetalle producto ={producto}/>
      </>
  )
};

export default ItemDetalleContenedor;