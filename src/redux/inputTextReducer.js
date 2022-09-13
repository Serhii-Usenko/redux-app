import { INPUT_TEXT } from './types'

const initialState = {
    text: ''
}

export const inputTextReducer = (state = initialState, action) => {
    console.log('input reducer', action)

    switch(action.type) {
        case INPUT_TEXT: 
            return {
                ...state,
                text: action.text 
            }
        
        default:
            return state;
    }
}
