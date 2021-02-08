import {orderConstants, userConstants} from '../constants';

export function user(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {};
        case userConstants.REGISTER_SUCCESS:
            return {
                type: userConstants.REGISTER_SUCCESS,
                message: {...state, add_success: true}
            };
            case userConstants.USER_FIND_SUCCESS:
            return {
                type: userConstants.USER_FIND_SUCCESS,
                message: action.payload
            };
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}
