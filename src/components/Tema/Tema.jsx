import { useState } from "react";
import styles from "./Tema.module.css"

function Tema(){
    //caso de uso do usestate

    // caso 1: contador
    const [contador, setContador] = useState(0);

    // caso 2: texto digitado pelo usuario
    const [nome, setNome] = useState("");

    //caso 3: controle de tema
    const [temaEscuro, setTemaEscuro] = useState(false)

    //casos de uso do useeffect

    //caso 1: executa apenas uma vez, ao carregar o componente
    useEffect(() =>{

    }, []);

    //caso 2: executa sempre q o contador mudar
   useEffect(() => {

    }, [contador]);

    // caso3: executa sempre que o tema mudar
    useEffect(() => {

    }, [temaEscuro]);

    // função para aumentar o contador
    function aumentarContador(){

    }

    // funçao para aumentar o contador 
    function diminuirContador(){

    }

    //funcao para alternar o tema
    function alternarTema(){

    }

    return(
        <main>
        </main>
    );
}