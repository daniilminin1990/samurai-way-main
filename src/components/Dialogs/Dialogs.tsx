import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Oleg
        </div>
        <div className={s.dialog}>
          Tanya
        </div>
        <div className={s.dialog}>
          Victor
        </div>
        <div className={s.dialog}>
          Elena
        </div>
        <div className={s.dialog}>
          Valery
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