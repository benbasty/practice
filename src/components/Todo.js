import React from 'react'
import TodoList from './TodoList'
import './todo.css';

const Todo = () => {
  return (
    <div className='todo'>
        <h1>Todo List</h1>
        <TodoList />
    </div>
  )
}

export default Todo