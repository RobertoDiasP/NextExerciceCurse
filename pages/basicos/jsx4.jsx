export default function jsx4() {
    const subtitulo = "Estou no arquivo jsx4"
    return (
        <div>
            <h1>JSX #04</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(13, 39)}</h4>
            <h5>{media(6, 8)}</h5>
            
        </div>
    )
}

function media(n1, n2) {
    return (n1 + n2) / 2
}