import { addDoc, collection, Timestamp } from "@firebase/firestore";
import { useContext } from "react";
import { createContext, useState } from "react";
import swal from "sweetalert";
import { getData } from "../firebase";
import UserContex from './userContex'
const Cartcontext = createContext({});

export const CartProvider = ({ children }) => {
  const {CerrarSesion} = useContext(UserContex);

  const [carrito, setCarrito] = useState([]);
  const [unidad, setUnidad] = useState(0);
  const [preciot, setPrecioT] = useState(0);

  

  const addItem = (itemComprar, cantidad) => {
    const itemRep = carrito.find( item => item.id === itemComprar.id);
    if (!itemRep){
        setCarrito([...carrito,
          {
            nombre: itemComprar.nombre,
            subtotal: (itemComprar.precio * cantidad),
            cantidad: cantidad,
            precio: itemComprar.precio,
            id: itemComprar.id
          }
        ]);
        setUnidad(unidad + cantidad);
        setPrecioT(preciot + (itemComprar.precio * cantidad));
    }else{
      const carritoBorrador = carrito.map((item)=>{
        if(item.id === itemComprar.id){
          item.cantidad = item.cantidad - ( -cantidad )
          item.precio = item.precio + (itemComprar.precio * itemComprar.cantidad)
        }
        return(item)
      })
      setCarrito(carritoBorrador);
      setUnidad(unidad + cantidad);
    };
  
  };
  const RemoveCart = () => {
    setCarrito([])
    setPrecioT(0)
    setUnidad(0)
  };
  const RemoveItem = (id) => {
    carrito.map( (item) => {
      if (item.id === id){
        setPrecioT(preciot - (item.subtotal))
        setUnidad(unidad - (item.cantidad))
      };
    });
    const carritoBorrador = carrito.filter((itemnoborrar) => itemnoborrar.id !== id);
    setCarrito(carritoBorrador);
  };
  const FinDeCompra = async ( carrito, user, numero, email) => {
    const ordenCollection = collection(getData(), "orden");
    const orden = {
      user: { 
        nombre:{user}, 
        phone:{numero}, 
        mail:{email}
      },
      dataOrden: Timestamp.fromDate(new Date()),
      item: { ...carrito }
      
    };
    const ordenDeCompra = await addDoc(ordenCollection, orden);
    
    let elCarro = carrito.map(tituloObjeto => {
      return( " " + tituloObjeto.nombre + "  cantidad: " +tituloObjeto.cantidad )
    })
    console.log(elCarro);
    swal(`Hola usuario ${user}, el id de su compra es: ${ordenDeCompra.id}` , `su compra fue de:  ${elCarro}` , "success")
    setCarrito([]);
    setUnidad(0)
    CerrarSesion();
    
  };
  
  return (
    
    <Cartcontext.Provider value={{ carrito, addItem, unidad, preciot,RemoveCart, RemoveItem, FinDeCompra }}>
      {children}
    </Cartcontext.Provider>
  );
};

export default Cartcontext;