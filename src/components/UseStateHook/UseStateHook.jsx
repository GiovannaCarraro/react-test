import { useState } from "react"
import styles from "./UseStateHook.module.css";


function UseStateHook(){

    const [contador, setContador] = useState(0);
 
    const atualizarNome = () => {
        setNome ('Giovanna')
    }

    const atualizarIdade = () => {
        setIdade(idade + 1)
    }

    const verificarEstado = () => {
        seteFalso(!eFalso)
    }

    return(
        <div>
            <p>Nome: {nome}</p>
            <button onClick={atualizarNome}>Mudar</button>

            <p>Idade: {idade}</p>
            <button onClick={atualizarIdade}>Incrementar</button>

            <p>É Falso: {eFalso ? 'NÃO': 'SIM'}</p>
            <button onClick={verificarEstado}>Veriicar</button>
        </div>
    )
}

export default UseStateHook