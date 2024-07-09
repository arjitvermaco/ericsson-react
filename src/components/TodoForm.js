import React, { useState } from 'react'

export default function TodoForm({ todos, setTodos, categories }) {

    

    const [todoItem, setTodoItem] = React.useState({
        task: '',
        category: categories[0]
    })

    const [error,setError] = useState(null)
    function handleChange(event) {

        const { name, value } = event.target
        setTodoItem(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(todoItem.task && todoItem.category){
            setTodos([...todos, todoItem])
            setTodoItem({
                task: '',
                category: categories[0]
            })
            setError(null)
        }else{
            setError('Please fill in all fields')
        }
    }
    return (
        <div>
            <form className='max-w-xl mx-auto p-12' onSubmit={handleSubmit} noValidate>
                <div className='mb-5 w-full'>
                    <label for="task" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Todo Item
                    </label>
                    <input type="text"
                     id="task"
                      name="task"
                      value={todoItem.task}
                      onChange={handleChange}
                      placeholder='Enter a todo item'
                      className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                </div>
                <div className="mb-5">
                    <label
                        for="categories"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Select A category
                    </label>
                    <select
                        id="categories"
                        name="categories"
                        value={todoItem.category}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                {error && <p className='text-red-500'>{error}</p>}

                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Add Todo</button>

            </form>
        </div>
    )
}
