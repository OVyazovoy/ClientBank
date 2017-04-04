import { CHANGE_CHOOSE } from '../constants/Page'

export function changeChoose(choose) {
    return {
        type: CHANGE_CHOOSE,
        payload: choose
    }
}
