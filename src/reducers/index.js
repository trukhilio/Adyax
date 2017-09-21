import { combineReducers } from 'redux';
import main from './main';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    main,
    form: formReducer
});