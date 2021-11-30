import { SET_CHARACTERS } from "../constants";


const initialState = {
  character:[]
}

const charReducer=(state = initialState,action)=>{
  switch(action.type){
    case SET_CHARACTERS:return{
        ...state,
        character:action.character    
    }
    default:return state;   
  }
}

export default charReducer;