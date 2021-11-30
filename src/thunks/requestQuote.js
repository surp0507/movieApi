import axios from 'axios'
import { setQuotes } from '../actions';

  const client=axios.create({
    baseURL:`https://the-one-api.dev/v2`
  })

  client.defaults.headers.common['Authorization']='Bearer 2eLk1xX-571Qudxo8MVB'
  export const requestQuote=(id)=> async (dispatch)=>{
    const response= await client.get(`/movie/${id}/quote`);
    dispatch(setQuotes(response.data.docs));
  
  }