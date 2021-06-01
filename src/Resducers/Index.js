
import {combineReducers} from 'redux';
import SelectedItemReducer from './Reducer-SelectedItem'
import BookDoctorReducer from './Reducer-BookDoctor'

const rootReducer=combineReducers({
    selectedItem:SelectedItemReducer,
    BookDoctor:BookDoctorReducer

})

export default rootReducer;