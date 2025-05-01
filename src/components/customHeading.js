import classNames from 'classnames'
import React from 'react'


export function CustomDiv({ children }) {
  return (
   
      <div className="max-w-6xl mx-auto min-h-screen !mt-5 px-4 pb-12 space-y-2 md:space-y-4">
        {children}
      </div>
 
  )
}
export function CustomH1({ children }) {
  return (
    <h1 className="text-xl md:text-3xl font-bold text-center  text-gray-800">
      {children}
    </h1>
  )
}
export function CustomH2({ children,className="" }) {
  return (
    <h1 className={classNames("text-lg md:text-2xl font-semibold text-gray-800 mb-4",className)}>
      {children}
    </h1>
  )
} 