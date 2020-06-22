import React from 'react'

const todoInput = props => (
        <div>
            <form onSubmit={props.added}>
                <label>Add new todo:</label>
                <input 
                    type="text" 
                    placeholder="Enter todo here..." 
                    onChange={props.changed} 
                    value={props.input} />
                <button type="submit">ADD</button>
            </form>
        </div>
    )

export default todoInput
