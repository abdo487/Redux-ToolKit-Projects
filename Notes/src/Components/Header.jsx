import React, { useEffect, useState } from 'react';

function Header() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 100) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    },[])
  return (
    <div
        className={`
            w-full h-fit
            flex items-center justify-between pl-5 rounded-[40px]
            mt-[50px] sticky top-[30px] transition-all duration-300
            mb-4
            ${
                show
                ? 'bg-primary shadow-lg border border-secondary'
                : 'bg-transparent'
            }
        `}
    >
      <h2 className='font-inter font-bold text-2xl text-quaternary'>Notes</h2>
      <button
        className='
            font-inter font-medium text-sm text-primary
            bg-quaternary rounded-[25px] px-5 py-3
            flex items-center gap-[10px] transition-all duration-300
            border border-transparent
            hover:bg-primary hover:border hover:border-tertiary
            hover:text-quaternary
        '
      >
        <i className="fas fa-plus"></i>
        New
      </button>
    </div>
  )
}

export default Header
