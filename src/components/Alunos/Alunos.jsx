import styles from './alunos.module.css'

function Alunos ({nome='vazio', idade=0, ativo = false}) {
    return (
        <> 
        <div className={styles.lista}>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Ativo: {ativo ? 'SIM':'NAO'}</p>
        </div>
        </>
    )
}

export default Alunos