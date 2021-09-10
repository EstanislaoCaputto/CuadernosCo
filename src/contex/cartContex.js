import { createContext, useState } from "react";
const Cartcontext = createContext({});

export const CartProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);
  const [unidad, setUnidad] = useState(0);
  const [preciot, setPrecioT] = useState(0)

  

  const addItem = (itemComprar, cantidad) => {
    const itemRep = carrito.find( item => item.nombre === itemComprar.nombre);
    if (!itemRep){
        setCarrito([...carrito,
          {
            nombre: itemComprar.nombre,
            subtotal: (itemComprar.precio * cantidad),
            cantidad: cantidad,
            precio: itemComprar.precio
          }
        ]);
        setUnidad(unidad + cantidad);
        setPrecioT(preciot + (itemComprar.precio * cantidad));
    }else{
      const carritoBorrador = carrito.map((item)=>{
        if(item.nombre === itemComprar.nombre){
          item.cantidad = item.cantidad - ( -cantidad )
          item.precio = item.precio + (itemComprar.precio * itemComprar.cantidad)
        }
        return(item)
      })
      setCarrito(carritoBorrador)
      setUnidad(unidad + cantidad);
    }
  
  };
  const RemoveCart = () => {
    setCarrito([])
    setPrecioT(0)
    setUnidad(0)
  };
  const RemoveItem = (nombre) => {
    carrito.map( (item) => {
      if (item.nombre === nombre){
        setPrecioT(preciot - (item.subtotal))
        setUnidad(unidad - (item.cantidad))
      }
    })
    const carritoBorrador = carrito.filter((itemnoborrar) => itemnoborrar.nombre !== nombre)
    setCarrito(carritoBorrador);
    
  }
  return (
    
    <Cartcontext.Provider value={{ carrito, addItem, unidad, preciot,RemoveCart, RemoveItem }}>
      {children}
    </Cartcontext.Provider>
  );
}

export default Cartcontext;