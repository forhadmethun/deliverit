import {alertActions} from './';
import {apiError} from "../util/error.processor";
import {orderConstants} from "../constants/order.constants";
import OrderService from "../services/order.service";

let orderService = new OrderService();

const add = (order) => async dispatch => {
    dispatch({
        type: orderConstants.ORDER_ADD_REQUEST,
        payload: {}
    });
    try {
        const response = await orderService.add(order);
        dispatch({
            type: orderConstants.ORDER_ADD_SUCCESS,
            payload: response
        });
    } catch (error) {
        dispatch({
            type: orderConstants.ORDER_ADD_FAILURE,
            payload: apiError(error)
        });
        dispatch(alertActions.error(apiError(error)));
    }
};
const findAll = () => async dispatch => {
    dispatch({
        type: orderConstants.ORDER_FIND_REQUEST,
        payload: {}
    });
    try {
        const response = await orderService.findAll();
        dispatch({
            type: orderConstants.ORDER_FIND_SUCCESS,
            payload: response
        });
    } catch (error) {
        dispatch({
            type: orderConstants.ORDER_FIND_FAILURE,
            payload: apiError(error)
        });
        dispatch(alertActions.error(apiError(error)));
    }
};

export const orderActions = {
    add,
    findAll
};
