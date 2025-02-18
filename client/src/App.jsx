import { useState } from 'react'
import './App.css'
import { UserChatMessage } from './components/UserChatMessage'

function App() {
  const isEmpty = str => !str.trim().length;

  const [userChatList, setUserChatList] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);

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
    .then(json => console.log(json.aiMessage))

    console.log(text);
  }

  const handleBtn = (e) => {
    e.preventDefault();

    let msg = document.getElementById('input-field').innerText;

    if (isEmpty(msg)) {
      setBtnDisabled(true);
    }
    else {
      setBtnDisabled(false)
    }
  }

  const messageTester = (e) => {
    e.preventDefault();

    let msg = document.getElementById('input-field').innerText;

    if (!isEmpty(msg)) {
      setUserChatList(userChatList.concat(<UserChatMessage key={userChatList.length} text={msg}/>))
    }
  }

  return (
    <>
    <div className='chat-container'>
      {userChatList}
    </div>
    <form className='input-container'>
      <div onKeyUp={handleBtn}  id='input-field' className='input-field' contentEditable='true'></div>
      <button disabled={btnDisabled} id='input-button' onClick={messageTester} className='input-button'>Go</button>
    </form>
    </>
  )
}

export default App