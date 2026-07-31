import { useState, useEffect } from "react";
import styles from "./Tema.module.css";


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
        console.log("Componente carregado pela primeira vez")
    }, []);

    //caso 2: executa sempre q o contador mudar
   useEffect(() => {
    console.log("O contador foi alterado para contador", contador)
    }, [contador]);

    // caso3: executa sempre que o tema mudar
    useEffect(() => {
        console.log("Tema alterado:", temaEscuro ? "Escuro" : "Claro")
    }, [temaEscuro]);

    // função para aumentar o contador
    function aumentarContador(){
        setContador(contador + 1);
    }

    // funçao para aumentar o contador 
    function diminuirContador(){
        setContador(contador - 1);
    }

    //funcao para alternar o tema
    function alternarTema(){
        setTemaEscuro(!temaEscuro)
    }

return (

    <main
      className={` ${
        styles.container
      } ${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}
    >
      <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

      {/* Caso 1: Contador */}
      <section className={styles.card}>
        <h2>1. Contador (useState)</h2>
        <p className={styles.valor}>{contador}</p>
        <div className={styles.botoes}>
            <button onClick={aumentarContador}>+</button>
            <button onClick={diminuirContador}>-</button>
        </div>

        <p>O useEffect observa a variavel <strong>contador</strong> 
        e executa sempre que ela muda. </p>
      </section>

      {/* Caso 2: Campo de texto */}
      <section className={styles.card}>
        <h2>2. Campo de texto (useState)</h2>
        <input 
        type="text"
        placeholder="Digite seu nome" 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className={styles.input}
        />
        <p>
            Ola, <strong>{nome || "visitante"}!</strong>
        </p>
      </section>

      {/* Caso 3: Alternância de tema */}
      <section className={styles.card}>
        <h2>3. Alternancia de tema (useState)</h2>
        <button onClick={alternarTema} className={styles.botoes}>
            Alternar para tema {temaEscuro ? "Claro" : "Escuro"}
        </button>
        <p>
            O useEffect observa a variavel <strong>temaEscuro</strong> e
            executa sempre que o tema é alterado.
        </p>
      </section>

    </main>
);
}
 export default Tema
