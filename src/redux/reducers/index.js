import { combineReducers } from "redux";
import patternsReducer from "./patternsReducer";
import scheduleReducer from "./scheduleReducer";

export default combineReducers({
    patterns: patternsReducer,
    schedule: scheduleReducer
})