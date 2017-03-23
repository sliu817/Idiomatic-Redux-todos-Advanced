import React from 'react'
import { Link } from 'react-router-dom'

const FilterLink = ({ children, filter }) => (
  <Link
    to={filter === 'all' ? '' : filter}
   
  >
    {children}
  </Link>
)

export default FilterLink

//it starts a dispatch action SET_VISIBILITY_FILTER
//It passes filter props to the Link Component, so every one link is going to have a different filter props it passes in the action.
//The store dispatch function will call our root reducer with the state and action which in turn will call the visibilityFilter reducer.
//when the action.type is set visibilityFilter, it just returns the action.filter as the next value, the next state of the visibilityFilter reducer.
//The root reducer will use this new field as part of its new state object.
//Get this new state object and pass all its keys as props to the TodoApp component.

/*
activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
*/
