import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type DialogsDataProps = {
  id: string,
  name: string
}

export type MessagesDataProps = {
  id: string,
  message: string
}

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

  let dialogsData: Array<DialogsDataProps> = [
    { id: '1', name: 'Ilya', },
    { id: '2', name: 'Oleg', },
    { id: '3', name: 'Tanya', },
    { id: '4', name: 'Victor', },
    { id: '5', name: 'Elena', },
    { id: '6', name: 'Valery', },
  ]

  let messagesData: Array<MessagesDataProps> = [
    { id: '1', message: 'Hi. How are you', },
    { id: '2', message: 'Yo mazafaka', },
    { id: '3', message: 'It is a great day innit?', },
    { id: '4', message: 'Hey', },
    { id: '5', message: 'Aloha', },
    { id: '6', message: 'Konichua', },
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItems name={dialogsData[1].name} id={dialogsData[1].id} />
        {/* <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Oleg</NavLink>
        </div> */}
        <DialogItems name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItems name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItems name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItems name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        {/* <div className={s.message}>Hi. How are you</div> */}
      </div>
    </div>
  )
}

export default Dialogs