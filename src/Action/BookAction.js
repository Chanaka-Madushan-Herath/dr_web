import {BOOK_DOCTOR, SELECT_BOOK} from './Types'

export const selectItem=(item)=>{
    return{
        type:SELECT_BOOK,
        payload:item
    }
};
export const BookDoctor=(item)=>{
    return{
        type:BOOK_DOCTOR,
        payload:item
    }
};