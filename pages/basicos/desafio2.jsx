import Desafio2Component from "../../components/Desafio2Component";
import styles from "./usandotitulo.module.css";

export default function Desafio2(){
    return(
        <div className={styles.container} >
            <Desafio2Component numero={10} />
            <Desafio2Component numero={4} />
        </div>
    )
}