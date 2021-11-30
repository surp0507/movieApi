import axios from 'axios'
import { setBooks } from '../actions';

  export const requestBooks=()=> async (dispatch)=>{
    const response= await axios.get(`https://the-one-api.dev/v2/book`);
    dispatch(setBooks(response.data.docs));
  }



