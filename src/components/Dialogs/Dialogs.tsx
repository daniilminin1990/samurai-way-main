import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItems = (props: { name: string, id: string }) => {
  let path = '/dialogs/' + props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div >
  )
}

const Message = (props: { message: string }) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItems name='Ilya' id='1' />
        <DialogItems name='Oleg' id='2' />
        {/* <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Oleg</NavLink>
        </div> */}
        <DialogItems name='Tanya' id='3' />
        <DialogItems name='Victor' id='4' />
        <DialogItems name='Elena' id='5' />
        <DialogItems name='Valery' id='6' />
      </div>
      <div className={s.messages}>
        <Message message='Hi. How are you' />
        <Message message='Yo mazafaka' />
        <Message message='It is a great day innit?' />
        {/* <div className={s.message}>Hi. How are you</div> */}
      </div>
    </div>
  )
}

export default Dialogs