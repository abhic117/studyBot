import { useState } from 'react'
import './App.css'
import { SubmitMessage } from './components/SubmitMessage'

function App() {
  const [message, setMessage] = useState('')

  return (
    <>
      <div>
        <form onSubmit={SubmitMessage(message)} class="input-container">
          <input onChange={(e) => setMessage(e.target.value)} value={message} className="input-field" placeholder='Message'/>
          <button className="input-button">Go</button>
        </form>
      </div>
    </>
  )
}

export default App
