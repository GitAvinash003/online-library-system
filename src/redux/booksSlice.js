import { createSlice } from '@reduxjs/toolkit'
import { books as initialBooks } from '../data/books'

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer
