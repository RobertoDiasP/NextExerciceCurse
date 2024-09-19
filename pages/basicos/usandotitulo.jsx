import Titulo from "@/components/Titulo";
import styles from "./usandotitulo.module.css";

export default function UsandoTitulo() {
    return (
        <div className={styles.container} >
            <Titulo 
            Titulo= "Principal da Página" 
            SubTitulo="Secundario da Página2" 
            header={true}
            />
            <br />
            <Titulo 
            Titulo= "spam" 
            SubTitulo="spam" 
            header={false}
            />
        </div>
    )
}