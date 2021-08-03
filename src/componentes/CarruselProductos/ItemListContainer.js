import React, {useState, useEffect} from "react";
import "./itemColor.css"

export default function ItemListContainer(props){
    return(
        <>
            <h1 className="ItemColor">{props.greeting}</h1>
        </>
    )
}