import { useState } from 'react'
import './App.css'
import { SubmitMessage } from './components/SubmitMessage'

function App() {
  const [message, setMessage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    SubmitMessage(message);
    e.target.reset();
  }

  return (
    <>
      <div>
        <form onSubmit={submitHandler} className="input-container">
          <input onChange={(e) => setMessage(e.target.value)} className="input-field" placeholder='Message'/>
          <button className="input-button">Go</button>
        </form>
      </div>
    </>
  )
}

export default App