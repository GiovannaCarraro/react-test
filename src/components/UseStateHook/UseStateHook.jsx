import { useState } from "react"
import styles from "./UseStateHook.module.css";


function UseStateHook(){

    const [contador, setContador] = useState(0);

    const Aumentar = () => {
        setContador(contador + 1);
    };

    const Diminuir = () => {
        setContador(contador - 1);
    };

    const Zerar = () => {
        setContador(0);
    };

    const Sortear = () => {
        setContador(Math.floor(Math.random() * 100));
    };

    function FormatarContador() {
    if (contador < 10 && contador >= 0) {
        return `0${contador}`;
    }

    return contador;
}

    return(
        <div className={styles.container}>
           <h1>{FormatarContador()}</h1>

            <button onClick={Aumentar}>+</button>

            <button onClick={Diminuir}>-</button>

            <button onClick={Zerar}>Reiniciar</button>

            <button onClick={Sortear}>Sortear</button>
        </div>
    );
}

export default UseStateHook;