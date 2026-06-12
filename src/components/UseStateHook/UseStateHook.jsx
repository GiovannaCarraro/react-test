import { useState } from "react"
import styles from "./UseStateHook.module.css";


function UseStateHook(){

    const [contador, setContador] = useState(0);

    return(
        <div className={styles.container}>
           <h1>{contador}</h1>

            <button onClick={Aumentar}>+</button>

            <button onClick={Diminuir}>-</button>

            <button onClick={Zerar}>Reiniciar</button>

            <button onClick={Sortear}>Sortear</button>
        </div>
    );
}

export default UseStateHook;