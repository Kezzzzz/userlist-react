/* eslint-disable react/prop-types */
import React from 'react'
import style from './assets/style.module.scss'

const TextValue = ({ label, value }) => {
  return (
    <div className={style.container}>
      <div className={style.label}>{label}</div>
      <div className={style.value}>{value}</div>
    </div>
  )
}

export default TextValue
