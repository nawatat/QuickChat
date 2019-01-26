import React from 'react'
import MessageBoard from './MessageBoard'
import UserProfile from './UserProile'

const mockMessageList = [
  {
    id: 1,
    type: 'self',
    text: 'test'
  },
  {
    id: 2,
    type: 'other',
    text: 'hi'
  },
  {
    id: 3,
    type: 'other',
    text: 'hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
  }
]
const ChatBoard = () => (
  <div className='chat-board'>
    <div className='chat-board-head'>
      <h2>Samart Prommajaree</h2>
    </div>
    <MessageBoard msgList={mockMessageList}/>
    <UserProfile />
  </div>
)

export default ChatBoard