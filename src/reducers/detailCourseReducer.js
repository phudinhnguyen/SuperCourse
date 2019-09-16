import * as Types from "../constants"
import _ from "lodash"

const initialState = {};

export const detailCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_DETAIL_BY_ID: 
            return action.payload
       
        default: return state;
    }
}