import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BookItems {
  id: number;
  img: string;
  title: string;
}

interface BookState {
  books: BookItems[];
  toRead: BookItems[];
  inProgress: BookItems[];
  completed: BookItems[];
}

const initialState: BookState = {
  books: [],
  toRead: [],
  inProgress: [],
  completed: [],
};

const libraryslice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addToLibrary: (state, action: PayloadAction<BookItems>) => {
      const { id } = action.payload;
      const alreadyExist =
        state.toRead.find((book) => book.id === id) ||
        state.inProgress.find((book) => book.id === id) ||
        state.completed.find((book) => book.id === id);

      if (!alreadyExist) {
        state.books.push(action.payload);
        state.toRead.push(action.payload);
      }
    },
    moveToInProgress: (state, action: PayloadAction<BookItems>) => {
      const { id } = action.payload;
      state.toRead = state.toRead.filter((book) => book.id !== id);
      state.inProgress.push(action.payload);
    },
    moveToCompleted: (state, action: PayloadAction<BookItems>) => {
      const { id } = action.payload;
      state.inProgress = state.inProgress.filter((book) => book.id !== id);
      state.completed.push(action.payload);
    },
    removeFromLibrary: (state, action: PayloadAction<BookItems>) => {
      const { id } = action.payload;
      state.toRead = state.toRead.filter((book) => book.id !== id);
      state.inProgress = state.inProgress.filter((book) => book.id !== id);
      state.completed = state.completed.filter((book) => book.id !== id);
    },
  },
});

export const {
  addToLibrary,
  moveToInProgress,
  moveToCompleted,
  removeFromLibrary,
} = libraryslice.actions;

export default libraryslice.reducer;
