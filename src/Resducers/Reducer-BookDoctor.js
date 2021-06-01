import {BOOK_DOCTOR} from '../Action/Types'

export default function (state=null,action){
    switch(action.type){
        case BOOK_DOCTOR:
            return action.payload;
            break;

    }
    return state
}