import React, { ChangeEvent } from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DialogsPageType, StoreType, sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state'


type DialogsProps = {
  store: StoreType
}

const Dialogs = (props: DialogsProps) => {

  let state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogs.map(el => {
    return <DialogItem key={el.id} name={el.name} id={el.id} />
  })
  let messagesElements = state.messages.map(el => {
    return <Message key={el.id} message={el.message} />
  })

  let newMessageBody = state.newMessageBody

  const onSendMessagesClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div>{dialogsElements}</div>
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder='Enter new message'>
            </textarea>
          </div>
          <div><button onClick={onSendMessagesClick}>Send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs