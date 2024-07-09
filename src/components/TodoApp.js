import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function TodoApp() {
    const [todos, setTodos] = React.useState([])
    const categories = ['Work', 'Home', 'Personal','Others']
  return (
    <div>
        <TodoForm categories={categories} todos={todos} setTodos={setTodos} />
        <TodoList todos={todos}/>
    </div>
  )
}
