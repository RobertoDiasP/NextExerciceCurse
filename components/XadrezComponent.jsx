import styles from "../pages/basicos/usandotitulo.module.css";

export default function XadrezComponent() {
    const numero = 64
    
    const numerop = (
        <div className={styles.container}>
            <div className={styles.xadrezP}>
                {Array.from({ length: numero }, (_, i) => (
                    <div key={i} className={i % 2 === 0 ? styles.xadrez : styles.xadrezB}>
                        {i + 1}
                    </div>
                ))}
            </div>
        </div>
    )

    return(         
        <>

            {numerop}
            <h1>hello</h1>

        </>
    );  
}