import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

const TodoList = ({todoData, onDeleted, onLabelClick, onMarkImportant}) => {

    const todoItems = todoData.map((el) => {
        const {id, ...elProps} = el
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem 
                    {...elProps}
                    onDeleted={()=>onDeleted(id)}
                    onLabelClick={()=>onLabelClick(id)}
                    onMarkImportant={()=>onMarkImportant(id)}/>
            </li>
        )
    })
    return(
        <ul className='list-group todo-list'>
            {todoItems}
        </ul>
    )
}

export default TodoList;
