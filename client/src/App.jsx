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
    <div className='divvy'>
      <form onSubmit={submitHandler} className="input-container">
        <div className="input-field" onChange={(e) => setMessage(e.target.value)} contentEditable="true"></div>
        <button className="input-button">Go</button>
      </form>
    </div>
    </>
  )
}

export default App