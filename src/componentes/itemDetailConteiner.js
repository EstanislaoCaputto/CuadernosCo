import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ItemDetalle from "./itemDetalle";
import { collection, query, where, getDoc, doc } from 'firebase/firestore';
import {getData} from '../firebase/index'

function ItemDetalleContenedor() {
  const { laReferencia } = useParams();
  const [producto, setProducto] = useState([]);
  const [cargar, setCargar] = useState(true);


  useEffect(()=>{
    const getProducto = async(laReferencia) =>{
      const produCollecion = query(collection(getData, 'Productos'), where('id', '==', laReferencia));
      const produSnap = await getDoc(produCollecion);
      produSnap.forEach((doc) => {
        setProducto(doc.data())
        setCargar(false)
      });

    getProducto()
    }
  },[laReferencia]);

  // useEffect(() => {
  //   const tarea = new Promise((resolve, reject) => {
  //     setCargar(true)
  //     setTimeout(
  //       () => { resolve(objetos.filter((item) => item.id === laReferencia)) },
  //       2000
  //     );

  //   })
  //   tarea.then((data) => {

  //     setProducto(data[0])
  //     setCargar(false)
  //   })
  //   tarea.catch((err) => console.error(err));
  // }, [laReferencia]); //por si cambia el id en la barra de navegacion
    

    

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
        <ItemDetalle {...producto}/>
      </>
  )
};

export default ItemDetalleContenedor;