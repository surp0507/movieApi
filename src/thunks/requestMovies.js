import axios from 'axios'
import { setMovies } from '../actions';

const client=axios.create({
  baseURL:`https://the-one-api.dev/v2`
})

  client.defaults.headers.common['Authorization']='Bearer 2eLk1xX-571Qudxo8MVB'
  export const requestMovies=()=> async (dispatch)=>{
    const response= await client.get(`/movie`);
    dispatch(setMovies(response.data.docs));
  
  }