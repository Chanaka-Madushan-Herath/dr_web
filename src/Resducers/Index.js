
import {combineReducers} from 'redux';
import SelectedItemReducer from './Reducer-SelectedItem'

const rootReducer=combineReducers({
    selectedItem:SelectedItemReducer
})

export default rootReducer;