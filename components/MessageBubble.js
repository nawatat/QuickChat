import React from 'react'

const MessageBubble = ({msg}) => {
  return (
    <div className={msg.type === 'self' ? 'message-row-self' : 'message-row'}>
      <div className='message'>
        <p>{msg.text}</p>
      </div>
    </div>
  )
}

export default MessageBubble