import styles from './button.module.css'

function Button({texto}) {
    return (
        <>
            <button className={styles.btn}>{texto}</button>
        </>
    )
}

export default Button