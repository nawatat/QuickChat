import React from 'react'
import UserList from '../components/UserList'
import ChatBoard from '../components/ChatBoard'
import styled from 'styled-components'
import '../index.scss'

const getUserList = () => {
  return ['a','b','c']
}
const App = () => (
<div className='main-wrapper'>
  <UserList userList={getUserList()}/>
  <ChatBoard />
</div>
)

export default App