import { SET_CHARACTERS } from "../constants";
import {SET_CHARACTER_FILTER} from '../constants/'

const initialState = {
  record:{
    character:[],
    filter:{limit:5}
  },
  
}

const charReducer=(state = initialState,action)=>{
  switch(action.type){
    case SET_CHARACTERS:return{
        ...state,
        record:{
          ...state.record,
          ...action.character

        }   
    }
    case SET_CHARACTER_FILTER:return{
      ...state,
      record:{
        ...state.record,
          filter:{
            ...state.record.filter,
            ...action.filter
          }
      }

    }

    default:return state;   
  }
}

export default charReducer;