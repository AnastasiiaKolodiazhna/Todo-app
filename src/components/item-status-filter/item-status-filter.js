import React, {Component} from 'react';

import './item-status-filter.css'

export default class ItemStatusFilter extends Component {


    state = {
        filter: 'All'
    }

    onSortDone = (e) => {
        let filter = e.target.value
        this.setState({ filter })
        this.props.onSortChange(filter)
    }

    render(){
        return(
            <div className='btn-group'>
                <button type='button'
                        className='btn btn-info'
                        value='All'
                        onClick={this.onSortDone}>All</button>
                <button type='button'
                        className='btn btn-outline-secondary'
                        value='Active'
                        onClick={this.onSortDone}>Active</button>
                <button type='button'
                        className='btn btn-outline-secondary'
                        value='Done'
                        onClick={this.onSortDone}>Done</button>
            </div>
        )
    }
}
 
