import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => ({
        payload: {
          id: nanoid(),
          ...data,
        },
      }),
    },
    deleteContact: (store, { payload }) => {
      return store.filter(item => item.id !== payload);
    },
  },
});

export default contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;