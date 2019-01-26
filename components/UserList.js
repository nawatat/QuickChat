import React from 'react'
import UserCard from './UserCard'

const UserList = ( {userList} ) => (
  <div className='user-list'>
    <div className='user-list-head'>
      Search !!!
    </div>
    <div className='user-list-wrapper'>
      {
        userList.map( (user) => (
          <UserCard key={user} user={user} />
        ))
      }
    </div>
  </div>
)

export default UserList