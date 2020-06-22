import React, { Component } from 'react'
import TodoInput from '../TodoInput/TodoInput'
import TodoOutput from '../TodoOutput/TodoOutput'
import { v4 as uuidv4 } from 'uuid';

class Todo extends Component {
    state = {
        todos: [
            { id: uuidv4(), content: "Add some Todo" },
            { id: uuidv4(), content: "Add more Todo" },
            { id: uuidv4(), content: "Add somemore Todo" },
        ],
        userInput: ''
    }

    // Getting the user input and setting the state with it
    userInputChangeHandler = (event) => {
        this.setState({ userInput: event.target.value })
    }

    // Adding a todo into the list
    addTodoHandler = (event) => {
        event.preventDefault()
        const input = this.state.userInput
        if (input) {
            const newtodo = {
                id: uuidv4(),
                content: input
            }
            const todos = [...this.state.todos, newtodo]

            this.setState({ todos, userInput: '' })
        }
    }

    // Editing the targeted todo and updating it
    todoEditHandler = (event, id) => {
        const todoIndex = this.state.todos.findIndex(todo => {
            return todo.id === id
        })

        const newTodo = {
            ...this.state.todos[todoIndex]
        }

        newTodo.content = event.target.value
        const todos = [...this.state.todos]
        todos[todoIndex] = newTodo

        this.setState({ todos })
    }

    // Removing a todo from the list
    removeTodoHandler = (todoIndex) => {
        const todos = [...this.state.todos]
        todos.splice(todoIndex, 1)

        this.setState({ todos })
    }

    render() {
        return(
            <div>
                <h1>ToDo</h1>
                <TodoInput 
                    input={this.state.userInput}
                    changed={this.userInputChangeHandler} 
                    added={(event) => this.addTodoHandler(event)} />
                {
                    this.state.todos.map((todo, index) => {
                        return <TodoOutput 
                            key={todo.id}
                            content={todo.content}
                            changed={(event) => this.todoEditHandler(event, todo.id)}
                            removed={() => this.removeTodoHandler(index)} />
                    })
                }
            </div>
        )
    }
}

export default Todo