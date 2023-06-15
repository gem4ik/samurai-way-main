
import {v1} from "uuid";
import {ActionTypes, MessageType} from "./Types";

const InitialDialogs = {
    dialogs: [
        {id: v1(), name: 'Kseniya'},
        {id: v1(), name: 'Gleb'},
        {id: v1(), name: 'Vlad'},
        {id: v1(), name: 'Misha'},
        {id: v1(), name: 'Kostya'},
        {id: v1(), name: 'Vova'},
    ],
    messages: [
        {id: v1(), message: 'I'},
        {id: v1(), message: "don't"},
        {id: v1(), message: 'even'},
        {id: v1(), message: 'know'},
        {id: v1(), message: 'who'},
        {id: v1(), message: 'i'},
        {id: v1(), message: 'am'}
    ],
    newMessageText: ''
}

export const DialogsReducer = (state: MessageType = InitialDialogs, action: ActionTypes):MessageType => {
    switch (action.type) {
        case 'ADD-CURRENT-MESSAGE-TEXT' : {
          state.newMessageText = action.payload.newMessageText
            return state
        }
        case 'ADD-MESSAGE' : {
            if (state.newMessageText !== '') {
                let newMessage = {id: v1(), message: state.newMessageText}
                state.messages.push(newMessage)
                state.newMessageText = ''
            }
            return state
        }
        default: return state
    }
};

export const addMessageTextAC = (newMessageText: string) => {
    return {
        type: 'ADD-CURRENT-MESSAGE-TEXT',
        payload: {newMessageText}
    } as const
}
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}