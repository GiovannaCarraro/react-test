import { useState } from "react";
import styles from "./ConsultaApiBtn.module.css";
import Swal from "sweetalert2"

export default function ConsultaApiBtn() {
  // Estado para renderizar os usuários no viewport
  const [usuarios, setUsuarios] = useState([]);

  // Iniciamos como false para evitar o texto "Carregando..." antes da ação do usuário
  const [carregando, setCarregando] = useState(false);

  // Estado tratar o erro
  const [erro, setErro] = useState("");

  /* 
    A busca é um manipulador de eventos (event handler).
    Ele garante previsibilidade: o efeito colateral (fetch) só ocorre por intenção direta do usuário.
  */
  async function buscarUsuarios() {
    // Resetamos os estados para preparar a interface para uma nova requisição limpa
    setCarregando(true);
    setErro("");

        Swal.fire({
    title: 'Carregando dados...',
    html: 'Aguarde...',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    didOpen: () => {
        Swal.showLoading();
    }
    });
    

    try {
      // Url para simular um erro interno do servidor (401 e 500)
    //   const resposta = await fetch("https://httpbin.org/status/500");

      // Consultar a API utilizando o método fetch --> resposta é um promisse
      const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(resposta);
          Swal.fire({title:"Dados carregados", text:"Os dados da página foram carregados com sucesso", icon:"success"})

      if (!resposta.ok) {
        // Tratar erro interno do servidor (500)
        if (resposta.status === 500) {

            Swal.fire({
            icon: "error",
            title: "Erro 500",
            text: "O banco de dados ou servidor falhou.",
            })
           
          throw new Error("Erro 500: O banco de dados ou servidor falhou.");
        }
        // Se for erro 401 (falta de autenticação)
        if (resposta.status === 401) {

             Swal.fire({
                        icon: "error",
                        title: "Erro 401",
                        text: "Usuário não autorizado.",
                        
                    });

          throw new Error("Erro 401: Usuário não autorizado.");
        }
        // Tratar erro HTTP do servidor (URL 404)

             Swal.fire({
                        icon: "error",
                        title: "Erro 404",
                        text: "URL não encontrada ou inválida",  });

        throw new Error(`Erro ${resposta.status}: URL não encontrada ou inválida.`);
      }

      // Converter a resposta da API em json (ela era uma promisse)
      const dados = await resposta.json();
      setUsuarios(dados);


    } catch (error) {
      console.log(error.message);

      // 3. Trata falhas de rede repentinas (Ex: a internet caiu no meio da requisição)
      if (error.message === "Failed to fetch" || !navigator.onLine) {

        Swal.fire({icon:"error",title:"Verifique sua internet.", text:"Não foi possível conectar ao servidor."});


        /* Se o fetch falhar por culpa do servidor, ele cai no else e atualiza o estado 
        "Erro ao buscar os usuários."
        Se falhar por falta de internet, cai no if e exibe a mensagem de offline. */
      } else {
        // 4. Garante que o "Erro ao buscar os usuários." seja exibido na tela
        setErro(error.message);
      }
    } finally {
    
      setCarregando(false);
    }
  }

 
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Consulta de API</h1>

      <section className={styles.card}>
        {/* Dispara a requisição sob demanda através do handler */}
        <button
          className={styles.buscarButton}
          onClick={buscarUsuarios}
          disabled={carregando}
        >
          {carregando ? "Buscando..." : "Consultar"}
        </button>

        <h2>Usuários da JSON Placeholder</h2>

        {/* Exibe mensagem de erro */}
        {erro && <p className={styles.erro}>{erro}</p>}

        {/* Exibe a lista de usuários */}
        {!carregando && !erro && (
          <ul className={styles.lista}>
            {/* Para cada item da lista vai retornar uma li completa (h3 e p) */}
            {usuarios.map((usuario) => (
              <li key={usuario.id} className={styles.item}>
                <h3>{usuario.name}</h3>
                <p>
                  <strong>E-mail:</strong> {usuario.email}
                </p>
                <p>
                  <strong>Cidade:</strong> {usuario.address.city}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

