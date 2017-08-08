import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import boardReducer from '../reducers/board'

export default combineReducers({
  routing: routerReducer,
  board: boardReducer,
})
