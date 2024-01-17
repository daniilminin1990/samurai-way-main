import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

type DialogsDataProps = {
  id: string,
  name: string
}

export type MessagesDataProps = {
  id: string,
  message: string
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
        {dialogsData.map(el => {
          return <DialogItem key={el.id} name={el.name} id={el.id} />
        })}
      </div>
      <div className={s.messages}>
        {messagesData.map(el => {
          return <Message key={el.id} message={el.message} />
        })}
      </div>
    </div>
  )
}

export default Dialogs