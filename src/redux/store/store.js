import countReducer from "../reducers/countReducer";
import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from 'redux-thunk'
 const manyReducers = combineReducers({
     one:countReducer
 })
export default createStore(manyReducers,applyMiddleware(thunk));
