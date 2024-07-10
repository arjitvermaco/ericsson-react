import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent({children}) {
  return (
    <div>
        <h1>Parent Component</h1>
        {children}
       
    </div>
  )
}
