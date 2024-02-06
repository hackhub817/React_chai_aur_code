import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(15);
  const addValue=()=>{
    if(counter<20)
    {
      counter=counter+1;
    }
    setcounter(counter);
  }
  const subvalue=()=>
  {
    if(counter>0)
    {
    counter=counter-1;
    }
    setcounter(counter);
  }
  return (
    <>
     <h1> Counter React</h1>
     <h2>Counter value:{counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br/>
     <button onClick={subvalue}>remove value</button>

    </>
  )
}

export default App
