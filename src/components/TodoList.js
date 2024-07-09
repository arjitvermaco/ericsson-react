import React from 'react'

export default function TodoList({todos}) {
  return (
    <div>
      <h1 className='text-center text-2xl font-bold'>Todo List</h1>
      <ul className='max-w-xl mx-auto p-12'>
        {todos.map((todo, index) => (
          <li key={index} className='mb-3'>
            <div className='flex justify-between'>
              <div>
                <span className='font-medium'>{todo.task}</span>
                <span className='ml-2 text-sm'>{todo.category}</span>
              </div>
              <button className='bg-red-500 text-white px-2 py-1 rounded' 
              onClick={() => console.log('Delete')}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  )
}
