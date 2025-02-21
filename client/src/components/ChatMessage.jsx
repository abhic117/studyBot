import '../stylesheets/ChatMessage.css'

export function ChatMessage({text, bubbleId, containerId}) {
    return (
        <div id={containerId} className='message-container'>
            <p id={bubbleId} className='message-bubble'>{text}</p>
        </div>
    )
}