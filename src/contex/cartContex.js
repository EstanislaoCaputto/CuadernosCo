import { createContext, useState } from "react";
const Cartcontext = createContext({});

export const CartProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);
  const [unidad, setUnidad]= useState(0);
  const [preciot, setPrecioT]=useState(0)

  const addItem = (itemComprar, cantidad) => {
    const itemRep = carrito.find( item => item.titulo === itemComprar.titulo);
    if (!itemRep){
        setCarrito([...carrito,
          {
            titulo: itemComprar.titulo,
            subtotal: (itemComprar.precio * cantidad),
            cantidad: cantidad, precio: itemComprar.precio
          }
        ]);
        setUnidad(unidad+1);
        setPrecioT(preciot + (itemComprar.precio * cantidad));
    }else{
      const carritoBorrador = carrito.map((item)=>{
        if(item.titulo === itemComprar.titulo){
          item.cantidad += cantidad
          item.precio += (itemComprar.precio*cantidad)
        }
        return(item)
      })
      setCarrito(carritoBorrador)
    }
  
  };
  const RemoveCart = () => {
    setCarrito([])
    setPrecioT(0)
  };
  const RemoveItem = (titulo) => {
    carrito.map( (item) => {
      if (item.titulo === titulo){
        setPrecioT(preciot - (item.subtotal))
      }
    })
    const carritoBorrador = carrito.filter((itemnoborrar) => itemnoborrar.titulo !== titulo)
    setCarrito(carritoBorrador)
  }
  return (
    
    <Cartcontext.Provider value={{ carrito, addItem, unidad, preciot,RemoveCart, RemoveItem }}>
      {children}
    </Cartcontext.Provider>
  );
}

export default Cartcontext;