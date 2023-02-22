import React from 'react'
import './todo.css';

function getClassName(selected) {
    if(selected) {
        return 'TodoItemContainer selected'
    } else {
        return 'TodoItemContainer'
    }
}

// in the component here, we can remove the selected state variable.

const TodoItem = ({todo, onClick}) => {
  return (
    <div className={
        getClassName(todo.selected)}
        onClick={() => onClick(todo.id)}
    >
        <p className='todoTitle'>{todo.title}</p>
    </div>
  )
}

export default TodoItem