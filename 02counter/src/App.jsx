import { useState } from 'react'
import './App.css'

function App() {

    let [counter, setCounter] = useState(15);
   
   //  let counter = 15

   const addValue = () =>{

     //counter = counter + 1;
     setCounter(counter+1)
  
   }

   const rmvValue = () =>{
        setCounter(counter-1)
   } 
  return (
    <>

    <h1>Counter Project Via React</h1>
    <h2>Counter Value: {counter}</h2>
    <button 
     onClick={addValue}>Add Value</button><br/>
    <button onClick={rmvValue}>Remove Value</button>
    </>
  )
}

export default App
