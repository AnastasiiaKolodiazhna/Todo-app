import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppHeader from '../app-header/app-header'
import TodoList from '../todo-list/todo-list'
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import ItemAddForm from '../item-add-form/item-add-form'

import './app.css'

export default class App extends Component {
    state = {
        todoData: [
            this.createItem('Drink tea'),
            this.createItem('Create app'),
            this.createItem('Have a lunch')
        ],
        term: '',
        filter: 'All'
    }

    createItem(label) {
        return ({
            label,
            id: uuidv4(),
            important: false,
            done: false
        })
    }

    deleteItem = (id) => {
        this.setState(({todoData})=>{
            const idx = todoData.findIndex(el => el.id === id)
            const newTodoData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

            return({
                todoData: newTodoData
            })
        })
    }

    addItem = (text) => {
        const newItem = this.createItem(text)
        this.setState(({todoData})=>{
            const newTodoData = [...todoData, newItem]
            return({
                todoData: newTodoData
            })
        })
    }

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex(el => el.id === id)
        const newItem =  {...arr[idx], [propName]: !arr[idx][propName] }
        const newTodoData = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
        return (newTodoData)
    }

    onLabelClick = (id) => {
        this.setState(({todoData})=>{
            return ({
                todoData: this.toggleProperty(todoData, id, 'done')
            })
        })
    }

    onMarkImportant = (id) => {
        this.setState(({todoData})=>{
            return ({
                todoData: this.toggleProperty(todoData, id, 'important')
            })
        })
    }

    onSearchChange = (term) => {
        this.setState({ term })
    }

    search(items, term){
        if(term.length === 0){
            return items
        }
        return items.filter((item)=>{
            return item.label.indexOf(term) > -1
        })
    }

    onSortChange = (filter) => {
        this.setState({ filter })
    }

    sortItems(items, filter){
        if (filter === 'All') {
            return items
        } else if (filter === 'Active') {
            return items.filter((item)=>{ return !item.done })
        } else if (filter === 'Done') {
            return items.filter((item)=>{ return item.done })
        }
        
    }

    render(){
        const { todoData, term, filter } = this.state
        let doneCount = todoData.filter(el => el.done).length
        let todoCount = todoData.length - doneCount

        let visibleItems = this.sortItems(this.search(todoData, term), filter)

        return(
            <div className='todo-app'>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className='d-flex'>
                    <SearchPanel
                        onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter 
                        onSortChange={this.onSortChange}/>
                </div>
                <TodoList 
                    todoData={visibleItems}
                    onDeleted={this.deleteItem}
                    onLabelClick={this.onLabelClick}
                    onMarkImportant={this.onMarkImportant}/>
                <ItemAddForm onAdded={this.addItem}/>
            </div>
        )
    }
}

