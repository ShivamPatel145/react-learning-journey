import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  const addvalue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  const removevalue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React practice with Shivam</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addvalue}
      >Add value</button>{" "}
      <button
      onClick={removevalue}
      >remove value</button>
      <p>footer: </p>
    </>
  )
}

export default App
