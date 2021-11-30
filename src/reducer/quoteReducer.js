import { SET_QUOTES } from "../constants";


const initialState = {
  quotes:[]
}

const quoteReducer=(state = initialState,action) => {
  switch(action.type){
    case SET_QUOTES:return{
      ...state,
      quotes:action.quotes    
    }
    default:return state;   
  }
}

export default quoteReducer;