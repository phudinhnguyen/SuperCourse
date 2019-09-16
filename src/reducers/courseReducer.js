import * as Types from "../constants"
import _ from "lodash"

const initialState = [];

export const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_COURSE_FROM_API: 
            return action.payload;
        case Types.ADD_COURSES:
            const courses = [...state, action.payload]
            return courses;
        
        case Types.DELETE:
            const coursesDeleted =  state.filter(course => course.nameCourse != action.payload)
            return coursesDeleted;

        case Types.UPDATE:
            const index = _.findIndex(state, (course) => course.nameCourse === action.payload.nameCourse);
            const newState = [...state];
            newState[index] = action.payload;
            return newState;
        default: return state;
    }
}