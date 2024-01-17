import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DialogsDataProps, MessagesDataProps } from '../../index'

type DialogsProps = {
  dialogsData: Array<DialogsDataProps>
  messagesData: Array<MessagesDataProps>
}

const Dialogs = (props: DialogsProps) => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogsData.map(el => {
          return <DialogItem key={el.id} name={el.name} id={el.id} />
        })}
      </div>
      <div className={s.messages}>
        {props.messagesData.map(el => {
          return <Message key={el.id} message={el.message} />
        })}
      </div>
    </div>
  )
}

export default Dialogs