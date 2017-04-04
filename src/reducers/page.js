import { CHANGE_CHOOSE } from '../constants/Page'

let initialState = {
    choose: 'NONE'
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CHOOSE:
            return Object.assign({},state,{choose: action.payload});
        default:
            return state;
    }

}