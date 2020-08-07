/* eslint-disable react/prop-types */
import React from 'react'
import style from './assets/style.module.scss'

const Button = ({ label, ...props }) => {
  return (
    <button type="button" className={style.button} {...props}>
      {label}
    </button>
  )
}

export default Button
