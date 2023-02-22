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

const TodoItem = ({todo}) => {
    // const [selected, setSelected] = useState(false);
    function clicked() {
        // setSelected((value) => !value)
    }
  return (
    <div className={getClassName(todo.selected)} onClick={clicked}>
        <p className='todoTitle'>{todo.title}</p>
    </div>
  )
}

export default TodoItem