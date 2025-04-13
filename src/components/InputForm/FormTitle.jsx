import React from 'react'

export default function FormTitle({title}) {
  return (
    <>
        <h1 className="text-3xl font-semibold text-gray-500 dark:text-gray-300 text-center mb-8 animate-slide-down">
            {title}
        </h1>
        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-500" />
    </>
    
  )
}
