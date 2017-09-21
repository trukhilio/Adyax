import {REHYDRATE} from 'redux-persist/constants';

const initialState = {
    hello: 'Hello'
};

export default function main(state=initialState, action){
    switch (action.type) {
        case REHYDRATE:
            let incoming = action.payload.main;
            if (incoming) return {...state, ...incoming };
            return state;
        default:
            return state;
    }
}