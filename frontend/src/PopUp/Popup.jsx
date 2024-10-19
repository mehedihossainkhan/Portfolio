import React from 'react'
import { useEffect } from 'react'
const Popup = ({isOpen, onClose,children, classname, title}) => {
    const classes = "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center backdrop-filter backdrop-blur-sm"
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
        
        // Clean up on unmount
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, [isOpen]);
    
      if (!isOpen) return null;
    if (!isOpen) return null

  return (
    <div className={classes}>
        <div className= {classname}>
            <div className='flex justify-between items-center pb-2'>
                <h1 className='text-2xl font-bold text-white'>{title}</h1>
                <button onClick={onClose} className='flex justify-center items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={onClose}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {children}
        </div>
    </div>
  )
}

export default Popup