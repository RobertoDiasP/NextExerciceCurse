import { Fragment } from "react"

function lista(valor){
    const lista = []
    for(let i = 0; i <= valor; i++){
        lista.push(<li key={i}>{i}</li>)
    }
    return lista
    
}

export default function Lista2(){
    return ( 
        // Lista dois e Fragment
        <>
            <h1>Lista 1</h1>
            <ul>{lista(15)}</ul>
            <br /><br />
            <h1>Lista 2</h1>
            <ul>{lista(10)}</ul>
        </> 
    
    )
}