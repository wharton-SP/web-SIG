import React from 'react'

const Content = ({ children }) => {
    return (
        <div className='bg-base-100 w-5/6 h-full pr-4 pb-4 pt-20 overflow-y-scroll'>
            <div className='w-full bg-base-200 p-2 rounded-lg min-h-full'>
                {children}
            </div>
        </div>
    )
}

export default Content