import { ADD_CARD_REQUEST,
        ADD_CARD_SUCCESS,
        ADD_CARD_CANCELED,
        ADD_CARD_FAIL,
        ADD_CARD_SAVE,
        CHANGE_CARD,
        QUANTITY,
        DELETE_CARD}
from '../constants/card';

const url = 'https://59c40115d201270011552f8e.mockapi.io/api/v1/cards';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}

export function getCards(dispatch){
    return function(dispatch){
        dispatch({
            type: ADD_CARD_REQUEST
        });
        fetch(url,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(checkStatus)
            .then(parseJSON)
            .then(function(data) {
                let itemsArr = [].concat(data);
                dispatch({
                    type: ADD_CARD_SUCCESS,
                    payload: itemsArr
                });
            }).catch(function(error) {
                dispatch({
                    type: ADD_CARD_FAIL,
                    error: true,
                    payload: new Error (error)
                });
        })
    }
}

export function addCardSave(card, dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_CARD_SAVE,
            card
        });
    }
}

export function cancelCardSave(dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_CARD_CANCELED
        });
    }
}
export function deleteCard(id,dispatch) {
    return function(dispatch){
        dispatch({
            type: DELETE_CARD,
            id
        });
    }
}
export function changeCard(idNew, indexOld, id, dispatch) {
    return function(dispatch){
        dispatch({
            type: CHANGE_CARD,
            idNew,
            indexOld,
            id
        });
    }
}

export function sum(quantity, id, dispatch) {
    return function(dispatch){
        dispatch({
            type: QUANTITY,
            quantity,
            id
        });
    }
}