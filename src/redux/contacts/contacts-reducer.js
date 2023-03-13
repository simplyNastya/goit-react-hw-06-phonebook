import { createReducer } from "@reduxjs/toolkit"
import { addContact, deleteContact } from "./contacts-actions"

const contactsReducer = createReducer([], builder => {
    builder.addCase(addContact, (state, {payload}) => {
        state.push(payload)
    })
        .addCase(deleteContact, (state, {payload}) => {
       return state.filter(item => item.id !== payload)
    })
} )

export default contactsReducer;