import React from 'react'

const UserCard = (user) => (
  <div className='user-card'>
    <div>
      <img src='https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-1/p50x50/47377736_1982361671833523_5551996583068827648_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=1eb6c4ff1dc1fd07a837e13b0cf81e39&oe=5CF54BDB' />
    </div>
    <div className='user-card-info'>
      <h3>Samart Prommajaree</h3>
      <p>Last message</p>
    </div>
  </div>
)

export default UserCard