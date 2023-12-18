import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  
   let myObj = { 
     username: "jahid",
     age:"21"
   }

   let NewArr = [1,2,3]

  return (
    <>
         <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      
      <Card username="diganto" btnText="click me"/>
      <Card username="ananto" />
                
    </>
  )
}

export default App
