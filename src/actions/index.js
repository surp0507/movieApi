import * as types from '../constants'

  export const setBooks=(books)=>{
    return{
      type:types.SET_BOOKS,
      books
    }
  }
 
  export const setCharacters=(character)=>{
    return{
      type:types.SET_CHARACTERS,
      character
    }    
  }

  export const setMovies=(movies)=>{
    return{
      type:types.SET_MOVIES,
      movies
    }    
  }

  export const setQuotes=(quotes)=>{
    return{
      type:types.SET_QUOTES,
      quotes
    }    
  }


 
