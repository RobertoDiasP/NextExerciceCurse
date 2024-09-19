export default function Titulo(props){
    const {Titulo} = props
    const {SubTitulo} = props
    const {header} = props
    if (header === true){
        return (
            <>
                <h1>{Titulo}</h1>
                <h2>{SubTitulo}</h2>
            </>
        )
    }
    else{
        return (
            <>
                <span>{Titulo}</span>
                <p>{SubTitulo}</p>
            </>
        )
    }
}