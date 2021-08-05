import Contador from "../contador/Contador.js"
import "./itemColor.css"

export default function ItemListContainer({greeting}){
    return(
        <>

            <h1 className="ItemColor">{greeting}</h1>

            <Contador inicial= {1} stock={10}/>
        </>
    )
}