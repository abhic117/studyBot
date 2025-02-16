import { useState } from 'react'
import './App.css'
import { Test } from './components/Test'

function App() {
  const [chatText, setChatText] = useState('')

  const postMessage = (e) => {
    e.preventDefault();

    let text = document.getElementById("division").innerText;

    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userMessage: text})
    })
    .then(response => response.json())
    .then(json => setChatText(json.aiMessage))

    console.log(text);
  }

  // const dunc = (e) => {
  //   e.preventDefault();

  //   setChatText(document.getElementById("division").innerText);
  // }

  return (
    <>
    <div className='chat-container'>
      <Test id='hoi' text={chatText}></Test>
    </div>
    <form className='input-container'>
      <div id='division' className='input-field' contentEditable='true'></div>
      <button onClick={postMessage} className='input-button'>Go</button>
    </form>
    </>
  )
}

export default App