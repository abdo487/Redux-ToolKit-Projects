import {configureStore } from '@reduxjs/toolkit';
import notesReducer from './Notes/NotesSlice.js';

export default configureStore({
    reducer: {
        notes: notesReducer
    }
})