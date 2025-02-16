import { useState } from 'react'
import './App.css'
import { Test } from './components/Test'

function App() {
  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userMessage: message})
    })
    .then(response => response.json())
    .then(json => console.log(json))

    e.target.reset();
  }

  return (
    <>
    <div className='chat-container'>
      <Test></Test>
    </div>
    <form onSubmit={submitHandler} className='input-container'>
      <div className='input-field' onChange={(e) => setMessage(e.target.value)} contentEditable='true'></div>
      <button className='input-button' type='submit'>Go</button>
    </form>
    </>
  )
}

export default App