import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const body = {
    testdata: 5
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: message})
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} class="input-container">
          <input onChange={(e) => setMessage(e.target.value)} value={message} className="input-field" placeholder='Message'/>
          <button className="input-button">Go</button>
        </form>
      </div>
    </>
  )
}

export default App
