import todo from './todo'
import { combineReducers } from 'redux'

const datatable = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {...state, 
             [action.id]: todo(state[action.id], action),
             };
    default:
      return state;
  }
}

const allIds = (state =[], action) => {
  switch(action.type) {
	 case 'ADD_TODO': 
	   return [...state, action.id];  
	  default:
	    return state;
  }	
}

const todos = combineReducers({
  datatable,
  allIds	
});

const getAllTodos = (state) => 
  state.allIds.map(id => state.datatable[id]);

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case 'all':
      return allTodos
    case 'completed':
      return allTodos.filter(t => t.completed)
    case 'active':
      return allTodos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
    
  }
}

export default todos
