import React, {Component} from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onInputChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        if(this.state.label){
            this.props.onAdded(this.state.label)
        }
        this.setState({
            label: ''
        })
    }

    render(){
        return(
            <form 
                className='item-add-form d-flex'
                onSubmit={this.onSubmitForm}>
                <input 
                    type='text'
                    className='form-control'
                    onChange={this.onInputChange}
                    placeholder='What needs to be done'
                    value={this.state.label}/>
                <button 
                    className='btn btn-outline-secondary'>
                        Add item
                </button>
            </form>
        )
    }
}
