import { ActionTypes, DialogsPageType } from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) : DialogsPageType => {
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    // this._state.dialogsPage.newMessageBody = action.body;
    state.newMessageBody = action.body;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    state.newMessageBody = '';
    state.messages.push({id: '7', message: body});
  }
  return state
}

export type SendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export type UpdateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  } as const
}
export const updateNewMessageBodyCreator = (body: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  } as const
}