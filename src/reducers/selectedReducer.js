import * as Types from "../constants"

const initialState = {};

export const selectedReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SELECT:
            return action.payload
        default: return state;
    }
}