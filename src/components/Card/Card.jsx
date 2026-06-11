import card from './card.module.css'

function Card ({nome='nenhum', curso='nenhum'}) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src="https://placehold.co/400" alt="foto de perfil" />
            <h2 className={styles.cardTitle}>Nome: {nome}</h2>
            <p className={styles.cardText}>Curso: {curso}</p>
        </div>
       
    );
};

export default card