import {VIEW_BOOKINGS} from '../Action/Types'

export default function (state=null,action){
    switch(action.type){
        case VIEW_BOOKINGS:
            return action.payload;
            break;

    }
    return state
}