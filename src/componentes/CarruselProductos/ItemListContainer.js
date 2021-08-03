import Contador from "../contador/Contador.js"
import "./itemColor.css"

export default function ItemListContainer(props){
    return(
        <>

            <h1 className="ItemColor">{props.greeting}</h1>

            <Contador />
        </>
    )
}