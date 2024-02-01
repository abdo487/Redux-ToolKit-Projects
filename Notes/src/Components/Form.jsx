import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNote, editNote } from "../State/Notes/NotesSlice.js";

function Form({toEditNote, setToEditNote}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(toEditNote) {
        dispatch(
            editNote({
                id: toEditNote.id,
                title,
                content,
            })
        );
    } else {
        dispatch(
            addNote({
                title,
                content,
            })
        );
    }
    setTitle("");
    setContent("");
  };
  useEffect(() => {
    if(toEditNote) {
      setTitle(toEditNote.title);
      setContent(toEditNote.content);
    }
  }, [toEditNote])
  return (
    <form
      onSubmit={handleSubmit}
      className="
            w-full h-fit-content
            flex flex-col items-center justify-between 
            px-4 md:px-6 py-4 rounded-[25px]
            transition-all duration-300 mb-4
            bg-white shadow-lg border border-secondary gap-2
        "
    >
      <input
        type="text"
        placeholder="Title"
        className="
                w-full h-full outline-none 
                font-inter font-medium text-xl
                placeholder-tertiary
                text-quaternary
                py-2 rounded-[20px]
            "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="w-full h-[1px] bg-secondary rounded-sm"></div>
      <textarea
        placeholder="Type something here..."
        className="
                w-full h-full outline-none 
                font-inter font-normal text-sm
                placeholder-tertiary
                text-quaternary
                p-2 rounded-[20px]
            "
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="
                w-fit h-full outline-none 
                font-inter text-normal mt-[10px]
                text-primary py-2 px-3 rounded-[14px] ml-auto
                bg-quaternary 
                border border-transparent transition-all duration-300
                hover:bg-primary hover:border hover:border-tertiary
                hover:text-quaternary
            "
      >
        {toEditNote ? 'Edit' : 'Add'} Note
      </button>
    </form>
  );
}

export default Form;
