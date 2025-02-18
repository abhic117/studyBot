import '../stylesheets/UserChatMessage.css'

export function UserChatMessage(prop) {
    return (
        <div className='message-container'>
            <p className='message-bubble'>{prop.text}</p>
        </div>
    )
}