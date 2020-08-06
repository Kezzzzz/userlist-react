/* eslint-disable react/prop-types */
import React from 'react'
import style from '../assets/style.module.scss'

const UserListView = ({ userData }) => {
  console.log('userData: ', userData)
  return (
    <div className="container">
      {userData.map((item) => (
        <div
          className={`${style.card} ${style['-padding']} ${style['-margin']}`}
        >
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  )
}

export default UserListView
