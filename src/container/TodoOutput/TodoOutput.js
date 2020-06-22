import React, { Component } from 'react'
import EditTodo from '../../Components/EditTodo/EditTodo'
import PropTypes from 'prop-types'

class TodoOutput extends Component {
    state = {
        buttonClicked: false
    }

    // Setting the state for edit button
    btnClickedHandler = (event) => {
        event.preventDefault()
        const clicked = this.state.buttonClicked

        this.setState({ buttonClicked: !clicked })
    }

    render() {

        let input = <button onClick={this.btnClickedHandler}>EDIT</button>

        if (this.state.buttonClicked) {
            input = <EditTodo 
                submit={this.btnClickedHandler}
                inputChanged={this.props.changed} 
                content={this.props.content} />
        } 

        return (
            <div>
                <p>{this.props.content}</p>
                {input}
                <button onClick={this.props.removed}>REMOVE</button>
            </div>
        )
    }
}

TodoOutput.protoTypes = {
    changed: PropTypes.func,
    content: PropTypes.string.isRequired,
    removed: PropTypes.func
}

export default TodoOutput