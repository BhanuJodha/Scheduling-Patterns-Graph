import { combineReducers } from "redux";
import patternsReducer from "./patternsReducer";
import scheduleReducer from "./scheduleReducer";
import dayReducer from "./dayReducer";

export default combineReducers({
    patterns: patternsReducer,
    schedule: scheduleReducer,
    day: dayReducer
})