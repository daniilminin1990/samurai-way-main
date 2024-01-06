import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Oleg</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Tanya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Victor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Elena</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/5'>Valery</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi. How are you</div>
        <div className={s.message}>Yo mazafaka</div>
        <div className={s.message}>It is a great day innit?</div>
      </div>
    </div>
  )
}

export default Dialogs