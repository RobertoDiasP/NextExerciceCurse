// fazer lista de 1 a 10 de uma li dentro de uma div
export default function lista1() {
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div>
            <h1>Lista #01</h1>
            <ul>
                {listagem(lista)}
            </ul>
        </div> 
    )

}

function listagem(value) {
    return value.map((i) => <li key={i}>{i}</li>)

}