import {VIEW_BOOKINGS} from './Types'

export const viewBooking=(item)=>{
    return{
        type:VIEW_BOOKINGS,
        payload:item
    }
};