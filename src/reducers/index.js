import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
import users from '../users';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    users,
    form: formReducer
})

export default rootReducer;