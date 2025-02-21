import { useState, useEffect, useTransition } from 'react'
import './App.css'
import { ChatMessage } from './components/ChatMessage'
import { uid } from 'uid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


function App() {
  const isEmpty = str => !str.trim().length;

  const [chatList, setChatList] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleMessage = (e) => {
    e.preventDefault();

    let msg = document.getElementById("input-field").innerText;
    let arr = [<ChatMessage containerId={'user-container'} bubbleId={'user-message'} key={uid()} text={msg}/>];

    setChatList(chatList.concat(<ChatMessage containerId={'user-container'} bubbleId={'user-message'} key={uid()} text={msg}/>));
    
    document.getElementById("input-field").textContent = '';

      fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userMessage: msg})
    })
    .then(response => response.json())
    .then(json => {
      arr.push(<ChatMessage containerId={'ai-container'} bubbleId={'ai-message'} key={uid()} text={json.aiMessage}/>);

      setChatList(chatList.concat(arr));
    })
    .catch((error) => {
      console.log(error);

      arr.push(<ChatMessage containerId={'error-container'} bubbleId={'error-message'} key={uid()} text={'Error sending message, please try again...'}/>);
      setChatList(chatList.concat(arr));

    })
  }

  const handleBtn = (e) => {
    e.preventDefault();

    let msg = document.getElementById('input-field').innerText;

    if (isEmpty(msg)) {
      setBtnDisabled(true);
    }
    else {
      setBtnDisabled(false);
    }
  }

  function createMessage(cId, id, message) {
    setChatList(chatList.concat(<ChatMessage containerId={cId} bubbleId={id} key={uid()} text={message}/>));
  }

  return (
    <>
    <div className='chat-container'>
      {chatList}
    </div>
    <form className='input-container'>
      <div onKeyUp={handleBtn}  id='input-field' className='input-field' contentEditable='true'></div>
      <button disabled={btnDisabled} id='input-button' onClick={handleMessage} className='input-button'><FontAwesomeIcon icon={faPaperPlane} size="xl" /></button>
    </form>
    </>
  )
}

export default App