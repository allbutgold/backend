import { useState, useEffect } from 'react'
import './App.css'
import InputForm  from '../src/modules/InputForm.jsx';
import OutputElement from '../src/modules/OutputElement.jsx'

function App() {
  const [inputValue, setInputValue] = useState();

  useEffect(()=> {
    fetch('http://localhost:9999/api/v1/lkw')
    .then(res => res.json())
    .then(data => setInputValue(data))
  }, [])

  if (!inputValue) return

  return (
    <main className="App">
      <h1>LKW DATENBANK</h1>
      <InputForm setInputValue={setInputValue}/>
      {inputValue.map((input) => {
        return (
          <OutputElement input={input} />
        )
      })}
    </main>
  )
}

export default App
