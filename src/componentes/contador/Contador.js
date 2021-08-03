import React, {useEffect, useState} from "react"

export default function Contador (props){
    const [Contar, setContar] = useState(0);
    const [Stock, setStock] = useState(10);

    useEffect(()=>{
        if(Stock>=1){
            console.log("Hay stock disponible todavia");
        }else{
            console.log("no hay mas");
        }
    },[Stock]);
    
    const Sumar = ()=>{
        if(Stock>=1){
            setContar(Contar +1)
            setStock(Stock - 1)
        }  
    }

    const Restar = ()=>{
        if(Stock>=0 && Stock<10){
            
        setContar(Contar -1)
        setStock(Stock + 1)

        }
    }
    
    return(
        <div className="container">
            <button className="btn btn-danger m-2" onClick={Sumar}>SUMAR</button>
            <button className="btn btn-danger m-2" onClick={Restar}>RESTAR</button>
            <span>Cantidad de objetos: {Stock}, Cantidad a comprar: {Contar}</span>
        </div>
    )
}