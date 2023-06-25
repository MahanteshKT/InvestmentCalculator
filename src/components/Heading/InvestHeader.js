import React from 'react'
import style from "./InvestHeader.module.css"
import logo from "./invest-logo.png"
function InvestHeader() {
  return (
    <div className={style.investHeader}>
        <img className={style.titleImg} src={logo} alt="InvestLogo" />
        <h1 className={style.title}>Investment Calculator</h1>
    </div>
  )
}

export default InvestHeader
