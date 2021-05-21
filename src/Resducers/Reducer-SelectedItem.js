import {SELECT_BOOK} from '../Action/Types'

export default function (state=null,action){
    switch(action.type){
        case SELECT_BOOK:
            return action.payload;
            break;

    }
    return state
}