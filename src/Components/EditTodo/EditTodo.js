import React, { useEffect, useRef } from 'react'

const EditTodo = (props) => {

    const inputFocusRef = useRef('input')
    
    // Focusing the current input field
    useEffect(() => {
        inputFocusRef.current.focus()
    }, [])

    return (
        <div>
            <form onSubmit={props.submit}>
                <input 
                    type="text" 
                    ref={inputFocusRef}
                    onChange={props.inputChanged} 
                    value={props.content} />
                <button type="submit">CLOSE</button>
            </form>
        </div>
    )
}
    


export default EditTodo