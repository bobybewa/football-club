import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk';
import loadingReducer from './data/loadingReducer'
import clubsReducer from './data/clubs'

const rootReducer = combineReducers({
    loadingReducer,
    clubsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store