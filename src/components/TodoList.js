import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'
import './todo.css';

const TodoList = () => {
    // to lift the state up: selected was in TodoItem, we add a new property selected to todos,
    // and we set it to false value.
    const [todos, setTodos] = useState([
        { title: 'exercise', selected: false, id: 0},
        { title: 'study', id: 1, selected: false},
        { title: 'eat', id: 2, selected: false},
        { title: 'wash clothes', id: 3, selected: false},
        { title: 'walk', id: 4, selected: false}
    ]);
    function onTodoItemClicked(id) {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.selected = !todo.selected;
        setTodos(newTodos);
    }
    function deleteSelected() {
        const newTodos = todos.filter((todo) => todo.selected === false);
        setTodos(newTodos);
    }
  return (
    <div className='todoListContainer'>
        { todos.map((todo) => (
            <TodoItem todo = {todo} key = {todo.id} onClick={onTodoItemClicked}/>
        ))}
        <div className='deleteTodo' onClick={deleteSelected}>
            <p>delete</p>
        </div>
    </div>
  )
}

export default TodoList