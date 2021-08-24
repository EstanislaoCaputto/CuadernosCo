import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import objetos from "../misObjetos/objeto";
import ItemDetalle from "./itemDetalle";

function ItemDetalleContenedor() {
  const { laReferencia } = useParams();
  const [producto, setProducto] = useState([]);
  const [cargar, setCargar] = useState(false);

  useEffect(() => {
      setCargar(true)
      new Promise((resolve, reject) => {
        setTimeout(
          () => resolve(objetos.filter((item) => item.id === laReferencia)),
          2000
        );
        setCargar(false)
      }).then((data) => setProducto(data[0]));
      console.log(producto);
    }, []);

  if(cargar){
      <h1>Cargando...</h1>
  }

  return (
      <ItemDetalle {...producto}/>
  )
};

export default ItemDetalleContenedor;