import { useState } from "react"

function UseStateHook(){

    const [nome, setNome] = useState('Clique em mudar');
    const [idade, setIdade] = useState(0);
    const [eFalso, seteFalso] = useState(false);
    

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