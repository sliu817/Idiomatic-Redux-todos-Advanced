const todo = (state, action) => {       //in this case, this state refers to the individual todo.
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, //return a new array which includes all items from the original array but also a new todo item
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => //array map() creates a new array with the results of calling a function for every array element
        todo(t, action)                         //the function I pass as an argument will be called for every todo.
      )
    default:
      return state
  }
}

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state
    case 'completed':
      return state.filter(t => t.completed)
    case 'active':
      return state.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
    
  }
}

export default todos
