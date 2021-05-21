import {SELECT_BOOK} from './Types'

export const selectItem=(item)=>{
    return{
        type:SELECT_BOOK,
        payload:item
    }
};