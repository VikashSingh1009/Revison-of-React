import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(5)

  
  // let counter = 15; 
  const addValue = () => {
    // console.log("value added", Math.random());

    // counter = counter + 1;
    console.log("clicked", counter);
    if(counter < 20)
    setCounter(counter + 1)

    
  }

  const removeValue = () =>{
    if(counter > 0 )
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button> <br /><br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
