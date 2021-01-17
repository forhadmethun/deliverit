import {orderConstants} from '../constants';

export function order(state = {}, action) {
    switch (action.type) {
        case orderConstants.ORDER_FIND_SUCCESS:
            return {
                type: orderConstants.ORDER_FIND_SUCCESS,
                message: action.payload
            };
        case orderConstants.ORDER_ADD_SUCCESS:
            return {
                type: orderConstants.ORDER_ADD_SUCCESS,
                message: {...state, add_success: true}
            };
        default:
            return state
    }
}
