import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DialogsPageType } from '../../redux/state'


type DialogsProps = {
  state: DialogsPageType
}

const Dialogs = (props: DialogsProps) => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.state.dialogs.map(el => {
          return <DialogItem key={el.id} name={el.name} id={el.id} />
        })}
      </div>
      <div className={s.messages}>
        {props.state.messages.map(el => {
          return <Message key={el.id} message={el.message} />
        })}
      </div>
    </div>
  )
}

export default Dialogs