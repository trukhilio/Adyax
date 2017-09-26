import * as typeCard from '../constants/card';
import {REHYDRATE} from 'redux-persist/constants';

const initialState = {
    itemArr: [],
    basket: [],
    addNewCard: false,
    fetching: false,
    error: ''
};

export default function main(state=initialState, action){
    switch (action.type) {
        case REHYDRATE:
            let incoming = action.payload.main;
            if (incoming) return {...state, ...incoming };
            return state;
        case typeCard.ADD_CARD_REQUEST:
            return { ...state, addNewCard: true, fetching: true, error: '' };
        case typeCard.ADD_CARD_SUCCESS:
            return { ...state, addNewCard: true, fetching: false, error: '', itemArr: action.payload };
        case typeCard.ADD_CARD_SAVE:
            let newCard;
            action.card.quantity = action.card.min;
            if (state.basket.length!==0){
                let addCard = state.basket.some(item =>
                    item.id === action.card.id);
                if (addCard){
                    newCard = state.basket;
                } else {
                    newCard = state.basket.concat(action.card);
                }
            } else {
                newCard = [].concat(action.card);
            }
            return { ...state, addNewCard: false, fetching: false, error: '', basket: newCard };
        case typeCard.ADD_CARD_FAIL:
            return { ...state, addNewCard: false, fetching: false, error: action.payload.message };
        case typeCard.ADD_CARD_CANCELED:
            return { ...state, addNewCard: false, fetching: false, error: '' };
        case typeCard.DELETE_CARD:
            let deleteItem = state.basket.filter( item => item.id !== action.id );
            return { ...state, addNewCard: false, fetching: false, error: '', basket: deleteItem };
        case typeCard.CHANGE_CARD:
            let newBasket;
            let condition = state.basket.some(item =>
                item.id === action.idNew);
            if (condition) {
                newBasket = state.basket
            } else {
                newBasket = state.basket.slice();
                let newItem = state.itemArr.filter(item => item.id === action.idNew);
                newItem.map(item=>item.quantity=item.min);
                newBasket.splice(action.indexOld, 1, newItem[0]);
            }
            return { ...state, addNewCard: false, fetching: false, error: '', basket: newBasket };
        case typeCard.QUANTITY:
            let itemQuantity = state.basket.map(item=>
                item.id === action.id ?
                    { ...item, quantity: item.quantity+action.quantity}
                    :
                    item
            );
            return{ ...state, addNewCard: false, fetching: false, error: '', basket: itemQuantity};
        default:
            return state;
    }
}