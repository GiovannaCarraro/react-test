import {useEffect, useState } from "react";
import styles from "./UseEffectHook.module.css"

function UseEffectHook() {

const [contador, setContador] = useState(0);

const titulo = 'clicou'

console.log('sempre occorre, mas antes do useEffect')

useEffect(() =>{
    console.log('ocorre quando renderizar')
});

useEffect(() => {

})

    return <button
                className={styles.contadorButton}
                onClick={() => setContador(contador +1)}>

                    {contador}
                </button>

}

 

export default UseEffectHook