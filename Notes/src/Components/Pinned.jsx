import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'

function Pinned({ setToEditNote }) {
    const notes = useSelector(state => state.notes) 
  return (
    <div className='w-full flex flex-col gap-[10px] @container/pinned'>
      <h2 className='flex gap-2 items-center font-bold text-quaternary text-xl'>
        <i className="fas fa-thumbtack"></i>
        Pinned
      </h2>
      <div 
        className="
            w-full grid 
            place-items-center gap-2 
            grid-cols-1 @[400px]/pinned:grid-cols-2 
            @[600px]/pinned:grid-cols-3 @[800px]/pinned:grid-cols-4">
        {
            notes
            .filter(note => note.pinned).length === 0
            ? (
                <div className='w-full flex flex-col col-span-6 my-2 text-center'>
                    <h2 className='font-inter font-medium text-xl text-tertiary'>No Notes</h2>
                </div>
            )
            : notes
                .filter(note => note.pinned)
                .map(note => (
                    <Note key={note.id} note={note} {...{ setToEditNote}} />
                ))
        }
      </div>
    </div>
  )
}

export default Pinned
