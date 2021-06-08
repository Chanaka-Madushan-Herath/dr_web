
import {combineReducers} from 'redux';
import SelectedItemReducer from './Reducer-SelectedItem'
import BookDoctorReducer from './Reducer-BookDoctor'
import viewBookingReducer from './Reducer-ViewBookings'

const rootReducer=combineReducers({
    selectedItem:SelectedItemReducer,
    BookDoctor:BookDoctorReducer,
    viewBooking:viewBookingReducer

})

export default rootReducer;