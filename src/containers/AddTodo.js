import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))      //dispatch addtodo action.
        input.value = ''
      }}>
        <input ref={node => {              //The ref is used to return a reference to your element
          input = node                     //the ref callback receives the underlying DOM element as its argument
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo

//other component?
//either; The input and button are the presentational part, but dispatching an action onClick is the behavior.
