import { combineReducers } from "redux";
import authReducer from './auth.js'
import currentUserReducer from './currentUser.js'
import questionReducer from './questions.js'
import usersReducer from "./users.js";

export default combineReducers({
    authReducer, currentUserReducer , questionReducer , usersReducer
});