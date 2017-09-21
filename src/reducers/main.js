import * as type from '../constants/main';

import {REHYDRATE} from 'redux-persist/constants';

const initialState = {
    itemArr: [],
    addNewItem: false
};

export default function main(state=initialState, action){
    switch (action.type) {
        case REHYDRATE:
            let incoming = action.payload.main;
            if (incoming) return {...state, ...incoming };
            return state;
        case type.ADD_ITEM_REQUEST:
            return { ...state, addNewItem: true };
        case type.ADD_ITEM_SUCCESS:
            action.item.id = action.id;
            action.item.date = action.date;
            let newItem =  state.itemArr.concat(action.item);
            return { ...state, addNewItem: false, itemArr: newItem };
        case type.ADD_ITEM_CANCELED:
            return { ...state, addNewItem: false };
        default:
            return state;
    }
}