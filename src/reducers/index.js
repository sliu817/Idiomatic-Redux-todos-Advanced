import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp


//The only argument to combine reduers is an object.
//This object specify the mapping between the state field names, and the reducers managing them.
//This combineReducers call says that the todo's filed inside the state object managers will be updated by the todos reducer.
//the visibilityFilter field inside the state object will be updated by calling the visibilityFilter reducer.
//The results will be assembled intp a single object.

//ESTABLISH CONVENTION: always name my reducers after the state keys they manage.
//Since they are the same, I can omit the values thanks to ES6 object literal shorthand notation.


