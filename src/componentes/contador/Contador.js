import React, {useState} from "react"

export default function Contador ({inicial, stock}){
    const [Contar, setContar] = useState(inicial);
    const [Stock, setStock] = useState(stock);
         
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

    
    
    return(
        <div className="container">
            
            <p style={{ fontSize: '15px'}}>Cantidad de objetos: {Stock}, Cantidad a comprar: {Contar}</p>
            <div className="row-3">
            <button className="btn btn-success m-1" onClick={Sumar}>SUMAR</button>
            <button className="btn btn-danger m-1" onClick={Restar}>RESTAR</button>
            <button className="btn btn-warning">OnAdd</button>
            </div>

        </div>
    )
}