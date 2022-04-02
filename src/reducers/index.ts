import {alert} from './alert.reducer'
import {authentication} from './authentication.reducer'
import {registration} from './registration.reducer'
import {combineReducers} from "redux";

export default combineReducers({alert, authentication, registration})
