export default function Desafio2Component(props){
    return(
        <div style={{backgroundColor: props.numero  >= 5 ? "green" : "red" }} >
            <h1>Valor da Nota {props.numero}</h1>
        </div>
    )
}