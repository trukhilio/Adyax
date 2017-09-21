import {
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_CANCELED,

    DELETE_ITEM
} from '../constants/main';

import { uuidv4 } from '../utility/index';

export function addItemRequest(dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_ITEM_REQUEST
        });
    }
}
export function addItemSuccess(item, dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_ITEM_SUCCESS,
            item,
            id: uuidv4(),
            date: new Date().getTime()
        });
    }
}

export function cancelItemRequest(dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_ITEM_CANCELED
        });
    }
}