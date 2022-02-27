import { combineReducers } from "redux";
import { exampleReducer, incrReducer } from "./reducer";

const rootReducer = combineReducers({
  esteite: exampleReducer,
  incr: incrReducer
})

export default rootReducer