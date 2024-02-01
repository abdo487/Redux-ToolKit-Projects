import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

/*
    initialState is an empty array because we want to store an array of notes.
    Each note will be an object like this:
    note = {
        "id": "1",
        "title": "Note Title",
        "content": "Note Content"
        "pinned": false
        "dateCreated": "1233847384",
        "dateModified": "1233847384"
    }
*/
const initialState = [
    // {
    //     id: uuidv4(),
    //     title: 'Note Title',
    //     content: 'Note Content',
    //     pinned: true,
    //     dateCreated: Date.now(),
    //     dateModified: Date.now()
    
    // },
    // {
    //     id: uuidv4(),
    //     title: 'Note Title',
    //     content: 'Note Content',
    //     pinned: true,
    //     dateCreated: Date.now(),
    //     dateModified: Date.now()
    
    // },
    // {
    //     id: uuidv4(),
    //     title: 'Note Title',
    //     content: 'Note Content',
    //     pinned: true,
    //     dateCreated: Date.now(),
    //     dateModified: Date.now()
    
    // },
    {
        id: uuidv4(),
        title: 'Note Title',
        content: 'Note Content',
        pinned: false,
        dateCreated: Date.now(),
        dateModified: Date.now()
    
    },
    {
        id: uuidv4(),
        title: 'Note Title',
        content: 'Note Content',
        pinned: false,
        dateCreated: Date.now(),
        dateModified: Date.now()
    
    },
    {
        id: uuidv4(),
        title: 'Note Title',
        content: 'Note Content',
        pinned: false,
        dateCreated: Date.now(),
        dateModified: Date.now()
    
    },
];

/*
    We will have many actions for notes, so we will use createSlice() to create a reducer
    the actions that we will have are the next:
    - addNote
    - editNote
    - deleteNote
    - pinNote
    - unpinNote
*/
const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            const { title, content } = action.payload;
            state.push({
                id: uuidv4(),
                title,
                content,
                pinned: false,
                dateCreated: Date.now(),
                dateModified: Date.now()
            })
        },
        editNote: (state, action) => {
            const { id, title, content } = action.payload;
            const noteToEdit = state.find(note=> note.id === id);
            if(noteToEdit){
                noteToEdit.title = title;
                noteToEdit.content = content;
                noteToEdit.dateModified = Date.now();
            }
        },
        deleteNote: (state, action) => {
            const {id} = action.payload;
            const indexOfNote = state.findIndex(note=>note.id === id);
            if(indexOfNote !== -1){
                state.splice(indexOfNote, 1);
            }
        },
        pinNote: (state, action)=>{
            const {id} =action.payload;
            const noteToPin = state.find(note=>note.id === id);
            if(noteToPin){
                noteToPin.pinned = true;
            }
        },
        unpinNote: (state, action)=>{
            const {id} =action.payload;
            const noteToPin = state.find(note=>note.id === id);
            if(noteToPin){
                noteToPin.pinned = false;
            }
        }
    }
})

export const { addNote, editNote, deleteNote, pinNote, unpinNote } = notesSlice.actions;
export default notesSlice.reducer;