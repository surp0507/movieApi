import { SET_MOVIES } from "../constants";
import { SET_MOVIE_FILTER } from "../constants";


const initialState = {
  record:{
    movies:[],
    filter:{limit:200}
    }

  }
  console.log(initialState.record.filter)
 

const movieReducer=(state = initialState,action)=>{
  switch(action.type){
    
    case SET_MOVIES:return{
        ...state,
        record:{
          ...state.record,
          ...  action.movies

        }
     }   
   
     case SET_MOVIE_FILTER:return{
       ...state,
       record:{
         ...state.record,
         filter:{
           ...state.record.filter,
           ...action.moviefilter
         }
       }
     }
    default:return state;
  }
}
 


export default movieReducer;