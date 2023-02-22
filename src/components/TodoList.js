import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'
const TodoList = () => {
    // to lift the state up: selected was in TodoItem, we add a new property selected to todos,
    // and we set it to false value.
    const [todos, setTodos] = useState([
        { title: 'exercise', id: 0, selected: false},
        { title: 'study', id: 1, selected: false},
        { title: 'eat', id: 2, selected: false},
        { title: 'wash clothes', id: 3, selected: false},
        { title: 'walk', id: 4, selected: false}
    ]);
  return (
    <div className='todoListContainer'>
        { todos.map((todo) => (
            <TodoItem todo = {todo} key = {todo.id}/>
        ))}
        <div className='deleteTodo'>
            <p>delete</p>
        </div>
    </div>
  )
}

export default TodoList