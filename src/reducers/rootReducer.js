import { combineReducers } from "redux";
import { coursesReducer } from "./courseReducer";
import { selectedReducer } from "./selectedReducer";
import { detailCourseReducer } from "./detailCourseReducer";


const rootReducer = combineReducers({
    courses: coursesReducer,
    selected: selectedReducer,
    detail: detailCourseReducer
})

export default rootReducer;