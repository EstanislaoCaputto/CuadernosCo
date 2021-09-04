import React, {useState} from "react"
import { Link } from "react-router-dom";

export default function Contador ({inicial, stock, onAdd}){
    const [Contar, setContar] = useState(inicial);
    const [Stock, setStock] = useState(stock);
    const [Activado, setActivado] = useState(false);
    
    
  
    
    const Sumar = ()=>{
        if(Stock>=1){
            setContar(Contar + 1)
            setStock(Stock - 1)
        }  
    }

    const Restar = ()=>{
        if(Stock>=0 && Contar!==0){
            
        setContar(Contar -1)
        setStock(Stock + 1)

        }
    }

    
    const Comprar = () =>{
        setActivado(true)
        
    }
    
    
    return(
        
        <div className="container">
            
            {!Activado ? 
                <>
                    <h3 style={{ fontSize: '15px' }}>Cantidad de objetos: {Stock}, Cantidad a comprar: {Contar}</h3>
                    <div className="row-3">
                        <button className="btn btn-success m-1" onClick={Sumar}>SUMAR</button>
                        <button className="btn btn-danger m-1" onClick={Restar}>RESTAR</button>
                        <button className="btn btn-warning m-1" onClick={Comprar}>Agregar al Carro</button>
                    </div>
                </>
                :
                <>
                    <Link to="/cart" className="btn" text="Terminar Compra" onClick={onAdd}>Finalizar Compra</Link>
                </>

            }
                        
            
            
        </div>
    )
}