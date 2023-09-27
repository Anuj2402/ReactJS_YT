import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [counter, setCounter] = useState(15); // dont use const it will give error 
  let [counter, setCounter] = useState(15); 
  // let counter = 15;

  let addValue= () => {
    if(counter < 20){
    // console.log("clicked", counter);
    setCounter(counter + 1);
    
    // counter = counter +1;
    }

  }

  let removeValue = () => {
    if(counter>0){
    setCounter(counter -1);
    }
  }

  return (
    <>
      
     <h1>React Series</h1>
     <h2>Counter Value : {counter}</h2>

     <button onClick={addValue} >Add Value  {counter}</button>
     <br />
     <br />
     <button
     onClick={removeValue}
     >Remove  Value {counter}</button>

     <p>Footer : {counter}</p>
    </>
  )
}

export default App
