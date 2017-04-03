import { SET_YEAR } from '../constants/Page'

let initialState = {
    year: 2016
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case SET_YEAR:
            return Object.assign({},state,{year: action.payload});
        default:
            return state;
    }

}