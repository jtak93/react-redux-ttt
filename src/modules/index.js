import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import boardReducer from '../Board/reducer'

export default combineReducers({
  routing: routerReducer,
  game: boardReducer,
})
