import React from 'react'
import styles from './button.module.css'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <>
    <div className='container'>
      <h1>Contador</h1>
      <h2>Você clicou {count} vezes</h2>
      <button  className={styles.myButton} onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
      
    </>
  )
}

export default App
