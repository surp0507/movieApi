import { SET_MOVIES } from "../constants";


const initialState = {
  movies:[]
}

const movieReducer=(state = initialState,action)=>{
  switch(action.type){
    case SET_MOVIES:return{
        ...state,
        movies:action.movies    
    }
    default:return state;   
  }
}

export default movieReducer;