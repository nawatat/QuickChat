import React from 'react'
import MessageBubble from './MessageBubble'


const MessageBoard = ( {msgList} ) => (
  <div className='message-board'>
    <div className='message-list'>
      {
        msgList.map( (msg) => (
          <MessageBubble key={msg.id} msg={msg} />
        ))
      }
    </div>
    <div className='message-input'>
      <input />
    </div>
  </div>
)

export default MessageBoard