import React, { useEffect, useRef } from "react";
import { useDispatch } from 'react-redux'
import { pinNote, unpinNote, deleteNote } from '../State/Notes/NotesSlice.js'

function Note({ note, setToEditNote }) {
    const dispatch = useDispatch();
    const ref = useRef(null); 
    const pinRef = useRef(null);
    const removeRef = useRef(null);

    const togglePinned = () => {
        setToEditNote(null)
        note.pinned? dispatch(unpinNote({id: note.id})) : dispatch(pinNote({id: note.id}))
    }
    const remove = () => {
        setToEditNote(null)
        dispatch(deleteNote({id: note.id}))
    }
    useEffect(() => {
        function handleClick(e) {
            if(e.target != pinRef.current && e.target != removeRef.current) setToEditNote(note)
        }
        ref.current?.addEventListener('click', handleClick);
        return () => {
            ref.current?.removeEventListener('click', handleClick);
        }
    }, [])
  return (
    <div
        ref={ref}
      className={`
                max-w-[250px] w-full h-[151px]
                flex flex-col items-center justify-between 
                px-4 md:px-6 py-4 rounded-[15px]
                transition-all duration-300
                ${note.pinned ? "bg-primary" : "bg-white"}
                shadow-lg border border-secondary gap-2 relative
                transition-all duration-300
                cursor-pointer
                hover:border-tertiary hover:scale-95
            `}
    >
      <div className="w-full flex gap-2 items-center justify-between">
        <h3 className="font-inter font-medium text-xl text-quaternary line-clamp-1">
            {note.title}
        </h3>
        {
            note.pinned
            ? (
                <i 
                    ref={pinRef}
                    onClick={togglePinned}
                    className="
                        fas fa-thumbtack 
                        text-[18px] w-[25px] aspect-[1/1] flex justify-center items-center
                        text-quaternary
                        cursor-pointer transition-all duration-200
                        hover:text-[20px]
                    "
                ></i>
            )
            : (
                <i 
                    ref={pinRef}
                    onClick={togglePinned}
                    className="
                        fas fa-thumbtack 
                        text-[18px] w-[25px] aspect-[1/1] flex justify-center items-center
                        text-tertiary rotate-45
                        cursor-pointer transition-all duration-200
                        hover:text-[20px]
                    "
                ></i>
            )
        }
      </div>
      <p className="w-full font-inter font-normal text-normal text-tertiary line-clamp-2">
        {note.content}
      </p>
      <div className="w-full flex gap-2 justify-between items-center mt-auto">
        <p className="text-[12px] text-tertiary">
            {
                new Intl.DateTimeFormat(
                    'en-US', 
                    {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    }
                ).format(new Date(note.dateModified))
            }
        </p>
        <i 
            ref={removeRef}
            onClick={remove}
            className="
                fas fa-trash 
                text-[16px] w-[25px] aspect-[1/1] flex justify-center items-center
                text-quaternary
                cursor-pointer transition-all duration-200
                hover:text-[18px]
            "
        ></i>
      </div>
    </div>
  );
}

export default Note;
