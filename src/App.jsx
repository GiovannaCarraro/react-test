import Alunos from './components/Alunos/Alunos.jsx'  

function App(){

    return (
        <>
    <Alunos nome={'ivo'} idade={40} ativo={true} />
    <Alunos nome={'alex'} idade={40} />
    <Alunos nome={'godo'} idade={30} ativo={true} />
        </>


  )
}

export default App
